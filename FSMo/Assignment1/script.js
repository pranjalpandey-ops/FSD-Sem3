const questions = [    {
        question: "What Does ABES stand for?",
        options: [
            "IDK",
            "YOU DONT KNOW",
            "WE DONT KNOW",
            "NO ONE KNOWS"
        ],
        answer: 4
    },
    {
        question: "Which PLACEMENT in ABES College for student?",
        options: [
            "Decent",
            "Worst",
            "Poor",
            "Data Not available"
        ],
        answer: 1
    },
    {
        question: "Why AC doesnt work in ABES?",
        options: [
            "Money Saving Process",
            "Likes to see Students that way",
            "NO one knows",
            "Kya hi bolu"
        ],
        answer: 4
    }
];

let currentQuestion = 0;
let score = 0;
let time = 30;
let timer;


// Start Quiz
function startQuiz() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let section = document.getElementById("section").value;

    if (name === "" || roll === "" || section === "") {
        alert("Please enter all details!");
        return;
    }

    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";

    document.getElementById("student-info").innerHTML =
        "Name: " + name +
        " | Roll: " + roll +
        " | Section: " + section;

    showQuestion();

    timer = setInterval(countdown, 1000);
}


// Show Question
function showQuestion() {

    let q = questions[currentQuestion];

    document.getElementById("question").textContent =
        q.question;

    let options = document.getElementById("options");

    options.innerHTML = "";

    q.options.forEach(function(option, index) {

        let button = document.createElement("button");

        button.textContent = option;
        button.className = "option";

        button.onclick = function() {

            if (index === q.answer) {
                score++;
            }

            // Disable all options
            document.querySelectorAll(".option")
                .forEach(btn => btn.disabled = true);
        };

        options.appendChild(button);
    });
}


// Next Question
function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
}


// Timer
function countdown() {

    time--;

    document.getElementById("time").textContent = time;

    if (time <= 0) {
        finishQuiz();
    }
}


// Finish Quiz
function finishQuiz() {

    clearInterval(timer);

    document.getElementById("quiz-screen").style.display = "none";

    document.getElementById("result-screen").style.display = "block";

    document.getElementById("final-score").textContent =
        "Your Score: " + score + "/" + questions.length;
}
