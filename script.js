let operator = "";
let firstNumber;
let secondNumber;
let result;

function add(a, b) {
    return result = parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
    return result = parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
    return result = parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
    if (parseFloat(b) === 0) {
        throw new Error("Can't divide by 0");
    }
    return result = parseFloat(a) / parseFloat(b);
}

function operate(firstNum, secondNum, localOperator) {
    let result = 0;

    try {
        switch(localOperator) {
            case "+":
                return result = add(firstNum, secondNum);
            case "-":
                return result = subtract(firstNum, secondNum);
            case "*":
                return result = multiply(firstNum, secondNum);
            case "/":
                if (secondNum === 0) {
                    throw new Error("Can't divide by 0");
                } else {
                    return result = divide(firstNum, secondNum);
                }
            default:
                return result = "An error has occured."
        }
    } catch(error) {
        return error.message;
    }
}

const inputContainer = document.querySelector(".input-container");
let output = document.querySelector(".output");

inputContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("numbers") && operator === "" && event.target.textContent !== "R") {
        if (firstNumber === undefined || firstNumber === result) {
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

    if(event.target.classList.contains("operators") && event.target.textContent !== "=") {
        if (firstNumber === undefined) {
            firstNumber = 0;
        }
        operator = event.target.textContent;
        output.textContent = firstNumber + operator;
    }

    if (event.target.textContent === "=" && firstNumber !== undefined && operator !== "" && secondNumber !== undefined) {
        try {
            result = operate(firstNumber, secondNumber, operator);
            output.textContent = result;
            firstNumber = result;
            operator = "";
            secondNumber = undefined;
        } catch (error) {
            output.textContent = error.message;
        }
    }

    if (event.target.textContent === "AC") {
        output.textContent = "";
        firstNumber = undefined;
        secondNumber = undefined;
        operator = "";
    }

    if (event.target.id === "Delete") {
        if (firstNumber !== undefined && operator === "" && secondNumber === undefined) {
            firstNumber = firstNumber.slice(0, firstNumber.length-1);
            output.textContent = firstNumber;
        } else if (firstNumber === "") {
            firstNumber === undefined;
        }

        if (secondNumber !== undefined) {
            secondNumber = secondNumber.slice(0, secondNumber.length-1);
            output.textContent = firstNumber + operator + secondNumber;
        } else if (secondNumber === "") {
            secondNumber === undefined;
        }

        if(operator !== "" && secondNumber === undefined) {
            operator = "";
            output.textContent = firstNumber;
        }
    }
})
