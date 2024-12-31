let operator = "";
let firstNumber;
let secondNumber;
let result;
let isError = false;
const inputContainer = document.querySelector(".input-container");
let output = document.querySelector(".output");

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
    let result;

    try {
        switch(localOperator) {
            case "+":
                return result = add(firstNum, secondNum);
            case "-":
                return result = subtract(firstNum, secondNum);
            case "*":
                return result = multiply(firstNum, secondNum);
            case "÷":
                return result = divide(firstNum, secondNum);
            default:
                throw new Error("Invalid oeprator");
        }
    } catch(error) {
        isError = true;
        return error.message;
    }
}

function scrollToEnd() {
    output.scrollLeft = output.scrollWidth;
}

inputContainer.addEventListener("click", (event) => {

    if (isError && event.target.id !== "AC") {
        return;
    } else {
        // TODO: prevent multiple dots
        if (event.target.classList.contains("numbers") && operator === "" && event.target.textContent !== "R") {
            
            // completely broken, fix some other time
            // if (firstNumber === undefined || firstNumber === result) {
            //     if (event.target.id = "." && firstNumber === undefined) {
            //         firstNumber = `0${event.target.textContent}`;
            // } else {
            //     firstNumber = event.target.textContent;
            // } else {
            //     firstNumber += event.target.textContent;
            // }

            // if (event.target.id === "." && firstNumber.includes(".")) {
            //     return;
            // }
            
            output.textContent = firstNumber;
            scrollToEnd();
        } else if (event.target.classList.contains("numbers") && operator !== "" && event.target.textContent !== "R") {
            if (event.target.id === "." && secondNumber.includes(".")) {
                return;
            }
            
            if (secondNumber === undefined) {
                secondNumber = event.target.textContent;
            } else {
                secondNumber += event.target.textContent;
            }

            output.textContent = firstNumber + operator + secondNumber;
            scrollToEnd();
        }

        if (event.target.classList.contains("operators") && event.target.textContent !== "=" && secondNumber === undefined) {
            if (firstNumber === undefined) {
                firstNumber = 0;
            }

            operator = event.target.textContent;
            output.textContent = firstNumber + operator;
            scrollToEnd();
        }

        if (event.target.textContent === "=" && firstNumber !== undefined && operator !== "" && secondNumber !== undefined) {
            try {
                result = operate(firstNumber, secondNumber, operator);
                
                if (typeof result === "number" && !isNaN(result)) {
                    output.textContent = result.toFixed(6).replace(/\.?0+$/, '');
                    firstNumber = result.toFixed(6).replace(/\.?0+$/, '');
                } else {
                    output.textContent = result;
                }

                scrollToEnd();
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
            isError = false;
        }

        if (event.target.id === "Delete") {
            if (firstNumber !== undefined && operator === "" && secondNumber === undefined) {
                firstNumber = firstNumber.slice(0, firstNumber.length-1);
                output.textContent = firstNumber;
                scrollToEnd();
                
                if (firstNumber === "") {
                    firstNumber = undefined;
                } 
            }

            if (operator !== "" && secondNumber === undefined) {
                operator = "";
                output.textContent = firstNumber;
                scrollToEnd();
            }

            if (secondNumber !== undefined) {
                secondNumber = secondNumber.slice(0, secondNumber.length-1);
                output.textContent = firstNumber + operator + secondNumber;
                scrollToEnd();
                
                if (secondNumber === "") {
                    secondNumber = undefined;
                }
            }
        }
    }
})
