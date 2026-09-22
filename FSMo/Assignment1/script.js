const questions = [
    {
        question: "What Does ABES stand for?",
        options: [
            "IDK",
            "YOU DONT KNOW",
            "WE DONT KNOW",
            "NO ONE KNOWS"
        ],
        answer: 3
    },
    {
        question: "Which PLACEMENT in ABES College for student?",
        options: [
            "Decent",
            "Worst",
            "Poor",
            "Data Not available"
        ],
        answer: 0
    },
    {
        question: "Why AC doesnt work in ABES?",
        options: [
            "Money Saving Process",
            "Likes to see Students that way",
            "NO one knows",
            "Kya hi bolu"
        ],
        answer: 3
    },

    // Question 4
    {
        question: "Which language is mainly used to ABES?",
        options: [
            "Hindi",
            "Hinglish",
            "Foul",
            "None of the above"
        ],
        answer: 1
    },

    // Question 5
    {
        question: "who is ranjans Gf ?",
        options: [
            "pratham",
            "parth",
            "rohit",
            "all of the above"
        ],
        answer: 3
    }
];

let currentQuestion = 0;
let score = 0;
let time = 60

;
let timer;
let selected = false;


// Start Quiz
function startQuiz() {

    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let section = document.getElementById("section").value.trim();

    if (name === "" || roll === "" || section === "") {
        alert("Please enter all details!");
        return;
    }

    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";

    document.getElementById("student-info").textContent =
        "Name: " + name +
        " | Roll: " + roll +
        " | Section: " + section;

    showQuestion();

    timer = setInterval(countdown, 1000);
}


// Show Question
function showQuestion() {

    let q = questions[currentQuestion];

    // Reset selection for new question
    selected = false;

    document.getElementById("question").textContent =
        (currentQuestion + 1) + ". " + q.question;

    let options = document.getElementById("options");

    options.innerHTML = "";

    q.options.forEach(function(option, index) {

        let button = document.createElement("button");

        button.textContent = option;
        button.className = "option";

        button.onclick = function() {

            // Prevent selecting again
            if (selected) {
                return;
            }

            selected = true;

            // Highlight selected option
            document.querySelectorAll(".option").forEach(function(btn) {
                btn.style.background = "#f1f5f9";
                btn.style.color = "black";
            });

            button.style.background = "#2563eb";
            button.style.color = "white";

            // Check answer
            if (index === q.answer) {
                score++;
            }

            // Disable all options
            document.querySelectorAll(".option").forEach(function(btn) {
                btn.disabled = true;
            });
        };

        options.appendChild(button);
    });
}


// Next Question
function nextQuestion() {

    // Don't allow Next without selecting an answer
    if (!selected) {
        alert("Please select an option first!");
        return;
    }

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

function finishQuiz() {

    clearInterval(timer);

    document.getElementById("quiz-screen").style.display = "none";

    document.getElementById("result-screen").style.display = "block";

    document.getElementById("final-score").textContent =
        "Your Score: " + score + "/" + questions.length;
}