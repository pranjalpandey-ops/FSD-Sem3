// <!-- Student Activity Monitoring System (Using Event Emiter Module)
// 1. Create the events : 
//     Login Display - Student logged Succesfully 
//     Assignment :Display Assignment SUbmitted 
//     Logout : Display Student Logged out
//     Exit displau : Existing Application -->
    
const EventEmitter = require("events");


const Student = new EventEmitter();


Student.on("login", (name) => {
    console.log(name + " logged in successfully");

});

Student.on("assignment", (name) => {
    console.log(name + " submitted assignment");

});

Student.on("logout", (name) => {
    console.log(name + " logged out");

});

Student.on("exit", () => {
    console.log("Exiting Application");

});

Student.emit("login", "Pranjal");
Student.emit("assignment", "Pranjal");
Student.emit("logout", "Pranjal");
Student.emit("exit");