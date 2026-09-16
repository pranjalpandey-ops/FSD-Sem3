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

let index = 0;
let score = 0;
let time = 30;

const question = document.getElementById("question");
const options = document.getElementById("options");
const next = document.getElementById("next");
const result = document.getElementById("result");
const timer = document.getElementById("time");
function showQuestion() {
    question.textContent = questions[index].question;
    options.innerHTML = "";
    questions[index].options.forEach((option, i) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "option";

        button.onclick = function () {
            if (i === questions[index].answer) {
                score++;
            }

            next.disabled = false;
        };

        options.appendChild(button);
    });

    next.disabled = true;
}

next.onclick = function () {
    index++;

    if (index < questions.length) {
        showQuestion();
    } else {
        question.textContent = "Quiz Finished!";
        options.innerHTML = "";
        next.style.display = "none";
        result.textContent = `Your score is ${score}/${questions.length}`;
    }
};

setInterval(function () {
    time--;
    timer.textContent = time;
    if (time <= 0) {
        next.click();
    }
}, 1000);
showQuestion();