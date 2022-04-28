function mainFunction(callback) {
  const num1 = prompt('Enter the first number');
  const num2 = prompt('Enter the second number');
  callback(num1, num2);
}

function exponentiation(a, b) {
  const result = Math.pow(a, b);
  alert(result);
}

mainFunction(exponentiation);

function multiplay(a, b) {
  const result = a * b;
  alert(result);
}

function division(a, b) {
  const result = a / b;
  alert(result);
}

function modulo(a, b) {
  const result = a % b;
  alert(result);
}
