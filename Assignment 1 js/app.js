var num1 = +prompt("Enter first number")
var operators = prompt("+, -, *, /, and %")
var num2 = +prompt("Enter second number")


if (operators === "-") {
  alert(num1 - num2)
}

else if (operators === "+") {
  alert(num1 + num2)
}

if (operators === "*") {
  alert(num1 * num2)
}

if (operators === "/") {
  alert(num1 / num2)
}

if (operators === "%") {
  alert(num1 % num2)
}

else {
  alert("error")
}











