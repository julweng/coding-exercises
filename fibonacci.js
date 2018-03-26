function fib(n) {
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }
  return result[n];
}

function fibRecurse(n) {
  if (n <= 1) {
    return n;
  } 
  return fibRecurse(n - 1) + fibRecurse(n - 2)
}

// memo'd?

console.log(fib(0));
console.log(fib(2));
console.log(fib(5));
console.log(fib(6));

console.log(fibRecurse(0));
console.log(fibRecurse(2));
console.log(fibRecurse(5));
console.log(fibRecurse(6));
