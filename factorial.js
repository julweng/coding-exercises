// assuming n is a positive integer
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  for (let i = n - 1; i > 1; i--) {
    n *= i;
  }
  return n;
}

function factorialRecurse(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorialRecurse(n - 1)
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(10));
console.log(factorial(120));

console.log(factorialRecurse(0));
console.log(factorialRecurse(1));
console.log(factorialRecurse(3));
console.log(factorialRecurse(10));
console.log(factorialRecurse(120));

