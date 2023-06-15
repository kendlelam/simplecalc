let firstNumber;
let secondNumber;
let operator;
let completed;


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
        if (displayBox.textContent == 0 || completed){
            displayBox.textContent = event.target.textContent;
            completed = false;
        } else {
            if (firstNumber){
                if (secondNumber == null){
                    displayBox.textContent = event.target.textContent;
                    secondNumber = Number(displayBox.textContent);
                } else {
                    display(event.target.textContent);
                    secondNumber = Number(displayBox.textContent);
                }
                
            } else{
                display(event.target.textContent);
            }
            
            
            
        }
    })
})

const operators = document.querySelectorAll('.operator');
operators.forEach(e=>{
    e.addEventListener("click", event=>{
        firstNumber = Number(displayBox.textContent);
        if (firstNumber && operator) {
            secondNumber = Number(displayBox.textContent);
            let num = operate(firstNumber,secondNumber, operator); 
            displayBox.textContent = Math.round(num*1000)/1000;
            secondNumber = null;
            
            
        }
        operator = event.target.textContent;
        
            
        
    }
    
        
        
        
    )
})

const equals = document.querySelector('.calc');
equals.addEventListener("click", event=>{
    if(firstNumber != null && secondNumber != null && operator){
        let num = operate(firstNumber,secondNumber, operator); 
        displayBox.textContent = Math.round(num*1000)/1000;
        
    }
    firstNumber = null;
    secondNumber = null;
    operator = null;
    completed = true;
})

const clear = document.querySelector('.clear');
clear.addEventListener("click", event=>{
    displayBox.textContent="0";
    firstNumber = null;
    secondNumber = null;
    operator = null;
    completed = true;
})