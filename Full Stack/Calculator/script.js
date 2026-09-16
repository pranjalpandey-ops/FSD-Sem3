let display = document.getElementById("display");

function add(num){
    display.value += num;
}

function addi(){
    display.value += "+";
}

function sub(){
    display.value += "-";
}

function multiply(){
    display.value += "*";
}

function divi(){
    display.value += "/";
}

function equals(){
        display.value = eval(display.value);
    
}

function clearDisplay(){
    display.value = "";
}