// Custom Higher order function

function calculate(operator, a, b) {
  return operator(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(calculate(add, 5, 6));
console.log(calculate(multiply, 5, 6));
