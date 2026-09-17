let num1 = 73;
let num2 = 0;
let operator = "";
switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    if (num2 === 0) {
      console.log("Division by zero is undefined");
    }
    else 
    console.log(num1 / num2);
    break;
  default:
    console.log("inccorect operation");
    break;
}
