const divisions = [
    "Aerodynamics",
    "Drivetrains",
    "Embedded/Software",
    "Engine",
    "Fuel Cell",
    "Mechanical Testing",
    "Power Systems",
    "Structures",
    "Vehicle Dynamics",
    "Vehicle Electronics"
];

const questions = [
    {
        question: "Dogs or cats?",
        answers: [
            { text: "Dogs.", weights: { "Vehicle Dynamics": 1, "Fuel Cell": 1, "Drivetrains": 1, "Vehicle Electronics": 1 } },
            { text: "Cats.", weights: { "Aerodynamics": 0.5, "Vehicle Dynamics": 1, "Embedded/Software": 1, "Power Systems": 1 } },
            { text: "I don't like animals.", weights: { "Structures": 1, "Mechanical Testing": 1 } },
            { text: "I like bunnies.", weights: { "Engine": 1 } }
        ]
    },
    {
        question: "You have 8 hours till a final exam worth 80% of your grade. What do you do?",
        answers: [
            { text: "Get a good night's sleep.", weights: { "Vehicle Dynamics": 0.5, "Fuel Cell": 1, "Drivetrains": 1, "Aerodynamics": 1, "Vehicle Electronics": 1 } },
            { text: "Study until the exam.", weights: { "Structures": 1, "Engine": 1 } },
            { text: "Doomscroll.", weights: { "Embedded/Software": 1, "Drivetrains": 1 } },
            { text: "Cry uncontrollably.", weights: { "Aerodynamics": 1, "Mechanical Testing": 1, "Power Systems": 1 } }
        ]
    },
    {
        question: "In group projects, you tend to...",
        answers: [
            { text: "Become the \"leader\".", weights: { "Aerodynamics": 1, "Vehicle Dynamics": 1, "Structures": 1, "Fuel Cell": 1, "Drivetrains": 1, "Vehicle Electronics": 1 } },
            { text: "Do whatever someone tells you to do.", weights: { "Embedded/Software": 1, "Vehicle Dynamics": 1, "Aerodynamics": 1, "Mechanical Testing": 1, "Power Systems": 1 } },
            { text: "Ghost your group members.", weights: {} },
            { text: "Work on other homework during meetings.", weights: {} }
        ]
    },
    {
        question: "When something doesn't go your way, you...",
        answers: [
            { text: "Ask someone else to do it for you.", weights: {} },
            { text: "Crash out.", weights: { "Mechanical Testing": 1, "Power Systems": 1 } },
            { text: "Persevere until it works.", weights: { "Vehicle Dynamics": 0.5, "Structures": 1, "Embedded/Software": 1, "Fuel Cell": 1, "Drivetrains": 1, "Aerodynamics": 1, "Vehicle Electronics": 1 } },
            { text: "This has never happened to me because I'm goated.", weights: { "Aerodynamics": 1, "Engine": 1 } }
        ]
    },
    {
        question: "Why did you choose Engineering?",
        answers: [
            { text: "Money.", weights: { "Vehicle Dynamics": 1, "Mechanical Testing": 1 } },
            { text: "My parents are engineers.", weights: { "Engine": 1, "Power Systems": 1 } },
            { text: "I am passionate about engineering!", weights: { "Aerodynamics": 0.5, "Vehicle Dynamics": 1, "Structures": 1, "Fuel Cell": 1, "Vehicle Electronics": 1 } },
            { text: "To build cool things like missiles.", weights: { "Embedded/Software": 1, "Drivetrains": 1 } }
        ]
    },
    {
        question: "Are you germophobic?",
        answers: [
            { text: "No.", weights: { "Vehicle Dynamics": 0.5, "Embedded/Software": 1, "Vehicle Electronics": 1, "Mechanical Testing": 1 } },
            { text: "Yes.", weights: { "Drivetrains": 1, "Engine": 1, "Power Systems": 1 } },
            { text: "Kind of.", weights: { "Aerodynamics": 0.5, "Structures": 1, "Fuel Cell": 1 } },
            { text: "Why do you ask...", weights: {} }
        ]
    },
    {
        question: "A Supermileage member kidnaps you. Where do you want to be held hostage?",
        answers: [
            { text: "The basement.", weights: { "Aerodynamics": 1, "Engine": 1 } },
            { text: "A 5-star hotel with amenities.", weights: { "Vehicle Dynamics": 1, "Structures": 1, "Embedded/Software": 1, "Fuel Cell": 1, "Drivetrains": 1, "Vehicle Electronics": 1 } },
            { text: "Your own room.", weights: { "Vehicle Dynamics": 1, "Aerodynamics": 1, "Power Systems": 1 } },
            { text: "In the middle of a soccer field.", weights: { "Mechanical Testing": 1 } }
        ]
    },
    {
        question: "What would you do if someone pointed out your mistakes in front of 100 people including your family?",
        answers: [
            { text: "Apologize and cry uncontrollably.", weights: { "Aerodynamics": 0.5, "Fuel Cell": 1, "Vehicle Electronics": 1 } },
            { text: "Argue and defend yourself.", weights: { "Vehicle Dynamics": 1, "Structures": 1, "Drivetrains": 1 } },
            { text: "You don't care because you know you're right.", weights: { "Vehicle Dynamics": 1, "Mechanical Testing": 1 } },
            { text: "Drop out.", weights: { "Embedded/Software": 1, "Engine": 1, "Power Systems": 1 } }
        ]
    },
    {
        question: "You're running in the hallways and slip on a banana peel. What do you do?",
        answers: [
            { text: "Act like nothing happened.", weights: { "Vehicle Dynamics": 0.5, "Drivetrains": 1, "Aerodynamics": 1, "Vehicle Electronics": 1 } },
            { text: "I would never run in the hallways.", weights: { "Fuel Cell": 1, "Mechanical Testing": 1 } },
            { text: "Cry uncontrollably.", weights: { "Aerodynamics": 1, "Engine": 1, "Power Systems": 1 } },
            { text: "Leave the peel on the floor and wait for someone else to also slip on it.", weights: { "Structures": 1, "Embedded/Software": 1 } }
        ]
    },
    {
        question: "Would you jaywalk?",
        answers: [
            { text: "I always jaywalk.", weights: { "Embedded/Software": 1, "Power Systems": 1 } },
            { text: "Only if my friends are jaywalking.", weights: { "Mechanical Testing": 1 } },
            { text: "No. Never.", weights: { "Engine": 1 } },
            { text: "If it is significantly more Optimal, then yes.", weights: { "Aerodynamics": 0.5, "Vehicle Dynamics": 0.5, "Structures": 1, "Fuel Cell": 1, "Drivetrains": 1, "Vehicle Electronics": 1 } }
        ]
    }
];

const descriptions = {
    "Aerodynamics": "Let's all cry to SolidWorks errors together.\n\nThe Aerodynamics division makes Supermileage vehicles efficient by optimizing aeroshells for drag, packaging, and safety through iterative CAD, CFD simulation, and composite manufacturing.",
    "Drivetrains": "You're gonna be driving the train...\n\nThe Drivetrains division is responsible for designing and implementing the systems that transfer power from the propulsion device to the driven wheels of our vehicles.",
    "Embedded/Software": "You probably like pineapples on pizza.\n\nThe Embedded / Software Division develops the firmware and software that monitor, control, and connect the electronic systems across our vehicles.",
    "Engine": "THE ENGINE NEEDS YOU!!!\n\nThe division develops our gas engine from the ground up, including a custom designed & fabricated engine block, heavily modified valvetrain, and a custom electronic control systems.",
    "Fuel Cell": "I can sense it... You belong in the Fuel Cell division.\n\nThe Fuel Cell Division designs, builds, and optimizes the hydrogen powertrain that powers our Fuel Cell Prototype vehicle.",
    "Mechanical Testing": "Mechanical Testing works with other divisions to develop methods to analyze and monitor the performance of the various mechanical aspects of our vehicles.",
    "Power Systems": "The Power Systems Division is responsible for the design and validation of the electrical systems that power and drive our vehicles.",
    "Structures": "You were born to join the Structures division.\n\nThe Structures Division designs and manufactures the chassis and other structural components that are critical to driver safety across all three Supermileage vehicles.",
    "Vehicle Dynamics": "Do you have your drivers license? If so, apply for Vehicle Dynamics! If not, still apply!\n\nVehicle Dynamics designs and builds the steering and braking systems for our vehicles.",
    "Vehicle Electronics": "Fate is telling you to apply for the Vehicle Electronics division.\n\nVehicle Electronics is responsible for the low power systems of our vehicles: control, signals, and low power distribution."
};

// Track scores
let scores = {};
divisions.forEach(div => scores[div] = 0);

let currentQuestionIndex = 0;

// Element References
const homeSection = document.getElementById("quiz-home");
const startBtn = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultContainer = document.getElementById("result-container");
const resultTypeElement = document.getElementById("result-type");
const resultDescElement = document.getElementById("result-desc");

// Start Quiz Event
startBtn.addEventListener("click", () => {
    homeSection.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    loadQuestion();
});

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.className = "option";
        
        const p = document.createElement("p");
        p.innerText = answer.text;
        button.appendChild(p);

        button.onclick = () => selectAnswer(answer.weights);
        optionsElement.appendChild(button);
    });
}

function selectAnswer(weights) {
    for (const [division, points] of Object.entries(weights)) {
        if (scores.hasOwnProperty(division)) {
            scores[division] += points;
        }
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");

    // Find the highest score value
    const maxScore = Math.max(...Object.values(scores));

    // Get all divisions that achieved the highest score
    const topDivisions = Object.keys(scores).filter(division => scores[division] === maxScore);

    // Pick one randomly if there's a tie
    const winningDivision = topDivisions[Math.floor(Math.random() * topDivisions.length)];

    resultTypeElement.innerText = winningDivision;
    resultDescElement.innerText = descriptions[winningDivision];
}