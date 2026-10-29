let firstNum = Number(prompt("first number: "))
let operator = Number(prompt("operator(+ - * /): "))
let secondNum =Number(prompt("second number: "))

switch (operator) {
    case "+":
        document.write(firstNum + secondNum)
        break;
    case "-":
        document.write(firstNum - secondNum)
        break;
    case "*":
        document.write(firstNum * secondNum)
        break;
    case "/":
        if (secondNum == 0) {
            document.write("invalid")
        } else {
            document.write(firstNum / secondNum)
        }
        break;

    default:
        break;
}