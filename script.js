// custom cursor
const cursor = document.querySelector('.custom-cursor');

if (cursor) {
    window.addEventListener('pointermove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    const interactiveElements = document.querySelectorAll('a, button, .interactive');

    interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => cursor.classList.add('active'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });
}



if (!CSS.supports("animation-timeline: view()")) {
    document.documentElement.classList.add("no-scroll-timeline");
}


window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);



const headerH2 = document.querySelector('#big-header h2');

if (headerH2) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            headerH2.classList.add('zoomed');
        } else {
            headerH2.classList.remove('zoomed');
        }
    });
}


const supportsScrollTimeline = CSS.supports('(animation-timeline: view())');

if (document.documentElement.classList.contains("no-scroll-timeline")) {
    const infoEl = document.querySelector(".info");
    if (infoEl) {
        const observer = new IntersectionObserver(
            ([entry]) => infoEl.classList.toggle("bg-active", entry.isIntersecting),
            { threshold: [0.45, 0.6] } // roughly matches your animation-range: 45% 60%
        );
        observer.observe(infoEl);
    }
}

if (!supportsScrollTimeline) {
    document.documentElement.classList.add('no-scroll-timeline');

    const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));
    const lerp = (a, b, t) => a + (b - a) * t;

    function coverProgress(el) {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = vh + rect.height;
        const traveled = vh - rect.top;
        return clamp(traveled / total);
    }

    function rangeProgress(p, start, end) {
        return clamp((p - start) / (end - start));
    }

    const aboutH1 = document.querySelector('.about-text h1');
    const circle = document.querySelector('.circle');
    const headerContainer = document.querySelector('.header-container');
    const aboutSection = document.querySelector('.about-section');

    function update() {
        if (aboutH1) {
            const p = rangeProgress(coverProgress(aboutH1), 0.05, 0.55);
            aboutH1.style.backgroundPosition = `${lerp(100, 0, p)}% 50%`;
        }

        if (circle && headerContainer) {
            const p = rangeProgress(coverProgress(headerContainer), 0.45, 0.90);
            circle.style.transform = `scale(${lerp(0, 15, p)})`;
        }

        if (aboutSection) {
            const p = rangeProgress(coverProgress(aboutSection), 0.20, 0.40);
            aboutSection.style.opacity = p;
        }

        requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
}

// pop up stuff
const popupOverlay = document.getElementById('popupOverlay');
const popupClose = document.getElementById('popupClose');

if (popupOverlay && popupClose) {
    function closePopup() {
        popupOverlay.classList.add('hidden');
    }

    popupClose.addEventListener('click', () => {
        closePopup();
    });

    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) closePopup();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !popupOverlay.classList.contains('hidden')) {
            closePopup();
        }
    });
}

// nice smooth scroll
const lenis = new Lenis({
    duration: 1.2,  
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    smoothWheel: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


function createRevealObserver(selector, options) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  document.querySelectorAll(selector).forEach((el) => observer.observe(el));
}

createRevealObserver('.pj', {
  threshold: 0.2,
  rootMargin: '0px 0px -10% 0px'
});

createRevealObserver('.fact', {
  threshold: 0.5,
  rootMargin: '0px 0px -10% 0px'
});