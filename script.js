let firstNumber;
let secondNumber;
let operator;
let lastPressed;

const displayBox = document.querySelector(".display");


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}


function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operation) {
    if (operation === "+" ){
        return num1 + num2;
    } else if (operation === "-") {
        return num1 - num2;
    } else if (operation === "x") {
        return num1 * num2;
    } else {
        return num1 / num2;
    }

}

function display(s) {
    displayBox.textContent += s;
}

const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach(e => {
    e.addEventListener("click", event => {
        if (displayBox.textContent == 0){
            displayBox.textContent = event.target.textContent;
        } else {
            if (firstNumber){
                displayBox.textContent = event.target.textContent;
            } else {
                display(event.target.textContent);
            }
            
        }
    })
})

const operators = document.querySelectorAll('.operator');
operators.forEach(e=>{
    e.addEventListener("click", event=>{
        
        if (firstNumber && operator) {
            secondNumber = Number(displayBox.textContent);
            displayBox.textContent = operate(firstNumber,secondNumber, operator);
            
            
        }
        operator = event.target.textContent;
        firstNumber = Number(displayBox.textContent);
        
            
        
    }
    
        
        
        
    )
})

const equals = document.querySelector('.calc');
equals.addEventListener("click", event=>{
    secondNumber = Number(displayBox.textContent);
    if(firstNumber != null && secondNumber != null && operator){
        displayBox.textContent = operate(firstNumber,secondNumber, operator);
    }
    firstNumber = null;
    secondNumber = null;
    operator = null;
})

const clear = document.querySelector('.clear');
clear.addEventListener("click", event=>{
    displayBox.textContent="0";
    firstNumber = null;
    secondNumber = null;
    operator = null;
})