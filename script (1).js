const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2
    },
    {
        question: "Which language runs in a browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: 3
    },
    {
        question: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "None"
        ],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const options = document.querySelectorAll(".option");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    options.forEach((btn, index) => {
        btn.textContent = q.options[index];
    });
}

function checkAnswer(selected) {
    if (selected === quizData[currentQuestion].answer) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "Quiz Finished!";
        document.querySelector("ul").style.display = "none";
        document.getElementById("nextBtn").style.display = "none";
        scoreEl.textContent = `Your Score: ${score}/${quizData.length}`;
    }
}

loadQuestion();
