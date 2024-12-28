let operator = "";
let firstNumber;
let secondNumber;

function add(a, b) {
    return result = a + b;
}

function subtract(a, b) {
    return result = a - b;
}

function multiply(a, b) {
    return result = a * b;
}

function divide(a, b) {
    if (b === 0) {
        return errorZero = "Can't divide by 0";
    } else {
        return result = a / b;
    }
}

function operate(firstNum, secondNum, localOperator) {
    let result = 0;
    
    switch(localOperator) {
        case "+":
            return result = add(firstNum, secondNum);
        case "-":
            return result = subtract(firstNum, secondNum);
        case "*":
            return result = multiply(firstNum, secondNum);
        case "/":
            return result = divide(firstNum, secondNum);
        default:
            return result = "An error has occured."
    }
}

const inputContainer = document.querySelector(".input-container");
let output = document.querySelector(".output");

inputContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("numbers") && operator === "" && event.target.textContent !== "R") {
        if (firstNumber === undefined) {
            firstNumber = event.target.textContent;
        } else {
            firstNumber += event.target.textContent;
        }
        output.textContent = firstNumber;
    } else if (event.target.classList.contains("numbers") && operator !== "" && event.target.textContent !== "R") {
        if (secondNumber === undefined) {
            secondNumber = event.target.textContent;
        } else {
            secondNumber += event.target.textContent;
        }
        output.textContent = firstNumber + operator + secondNumber;
    }

    if(event.target.classList.contains("operators") && event.target.textContent !== "=" && operator === "") {
        if (firstNumber === undefined) {
            firstNumber = 0;
        }
        operator = event.target.textContent;
        output.textContent = firstNumber + operator;
    }
    // alert(firstNumber)
})
