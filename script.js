//  reference elements from the DOM
var clear = document.getElementById("clear");
var result = document.getElementById("result");
var evaluate = document.getElementById("equals");

//  clear output
clear.addEventListener("click", clearScreen);
function clearScreen() {
  result.value = "";
}

//  Show clicked values on screen
function showOnScreen(value) {
  if (value !== "=") result.value += value;
}

// evaluate the result in the Result field
evaluate.addEventListener("click", evaluateExpression);

function evaluateExpression() {
  var expression = result.value;
  var answer = eval(expression);

  result.value = answer;
}
