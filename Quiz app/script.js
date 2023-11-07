const questions = [
    {
        question: "Who was the 16th President of the United States?",
        answers: [" Thomas Jefferson", "Abraham Lincoln","George Washington","John F. Kennedy"],
        correctAnswer: "Abraham Lincoln",
    },
    {
        question: "What is the capital of France?",
        answers: ["Madrid", "Berlin", "Paris", "Rome"],
        correctAnswer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars",
    },
    {
        question: "What is the chemical symbol for water?",
        answers: ["H2O", "O2", "CO2", "N2O"],
        correctAnswer: "H2O",
    },
    {
        question: "Which river is the longest in the world?",
        answers: ["Amazon", "Nile", "Mississippi", "Ganga"],
        correctAnswer: "Nile",
    },
    
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const answerButtons = document.querySelectorAll(".answer");
const resultText = document.getElementById("result-text");
const nextButton = document.getElementById("next-button");

function startQuiz() {
    nextButton.style.display = "none";
    loadQuestion(currentQuestion);
}

function loadQuestion(questionIndex) {
    const currentQues = questions[questionIndex];
    questionText.textContent = currentQues.question;
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].textContent = currentQues.answers[i];
    }
}

function checkAnswer(button) {
    const selectedAnswer = button.textContent;
    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    resultText.textContent = selectedAnswer === correctAnswer ? "Correct!" : "Incorrect!";
    resultText.style.color = selectedAnswer === correctAnswer ? "green" : "red";
    nextButton.style.display = "block";
    answerButtons.forEach(button => {
        button.disabled = true;
    });
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion(currentQuestion);
        resultText.textContent = "";
        nextButton.style.display = "none";
        answerButtons.forEach(button => {
            button.disabled = false;
        });
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    questionText.textContent = `You have answered all the questions! Your score: ${score}/${questions.length}`;
    resultText.textContent = "";
    answerButtons.forEach(button => {
        button.style.display = "none";
    });
    nextButton.style.display = "none";
}

startQuiz();
