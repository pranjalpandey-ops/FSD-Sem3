// Sample Student Data
let students = [
    {
        id: 1,
        name: "Pushpajeet Sharma",
        roll: "101",
        branch: "CSE",
        year: "1st Year",
        email: "pushil@gmail.com"
    },
    {
        id: 2,
        name: "Pragati Verma",
        roll: "101",
        branch: "IT",
        year: "2nd Year",
        email: "verma@gmail.com"
    },
    {
        id: 3,
        name: "rishihka Singh",
        roll: "101",
        branch: "ECE",
        year: "1st Year",
        email: "rihsikaa@gmail.com"
    }
];

let nextId = 4;

const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");
const search = document.getElementById("search");
const filter = document.getElementById("filterBranch");
const count = document.getElementById("studentCount");
const noRecord = document.getElementById("noRecord");
function displayStudents(list = students) {
    table.innerHTML = "";
    if (list.length === 0) {
        noRecord.style.display = "block";
    } else {
        noRecord.style.display = "none";
    }
    list.forEach(student => {

        table.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.roll}</td>
                <td>${student.branch}</td>
                <td>${student.year}</td>
                <td>${student.email}</td>
                <td>
                    <button class="deleteBtn"
                        onclick="deleteStudent(${student.id})">
                        Delete
                    </button>
                </td>
            </tr>
        `;});

    updateCount(list.length);
}
function updateCount(total) {
    count.innerText = `Total Students : ${total}`;
}
form.addEventListener("submit", function(e){
    const student = {
        id: nextId++,
        name: document.getElementById("name").value.trim(),
        roll: document.getElementById("roll").value.trim(),
        branch: document.getElementById("branch").value,
        year: document.getElementById("year").value,
        email: document.getElementById("email").value.trim()

    };
    students.push(student);
    form.reset();
    applyFilters();
});
function deleteStudent(id){
    if(confirm("Delete this student?")){
        students = students.filter(student => student.id !== id);
        applyFilters();
    }};
function applyFilters(){
    const keyword = search.value.toLowerCase();
    const branch = filter.value;
    let filtered = students.filter(student => {
        const nameMatch = student.name
            .toLowerCase()
            .includes(keyword);
        const branchMatch =
            branch === "All" || student.branch === branch;
        return nameMatch && branchMatch;
    });
displayStudents(filtered);}
search.addEventListener("keyup", applyFilters);
filter.addEventListener("change", applyFilters);
displayStudents();