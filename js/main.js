
var num1 = +prompt("Enter number 1");
var num2 = +prompt("Enter number 2");

var operation = prompt("Enter operation (+, -, *, /)");

function calcunum(num1, num2, operation) {
    if (operation === "+") {
        return num1 + num2;
    } else if (operation === "-") {
        return num1 - num2;
    } else if (operation === "*") {
        return num1 * num2;
    } else if (operation === "/") {
        return num1 / num2;
    }
}

console.log(calcunum(num1, num2, operation))















