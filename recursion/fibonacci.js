function fibonacci(n) {
  //1, 1, 2, 3, 5, 8, 13, 21
  //base case
  if (n === 0) return 0;
  if (n === 1) return 1;
  //recursive case
  else return fibonacci(n - 2) + fibonacci(n - 1);
}

function fibonacciMemoize(n, tracking = []) {
  //0, 1, 1, 2, 3, 5, 8, 13, 21

  //base case
  if (n === 0) return 0;
  if (n === 1) return 1;

  //recursive case
  if (!tracking[n]) {
    tracking[n] =
      fibonacciMemoize(n - 2, tracking) + fibonacciMemoize(n - 1, tracking);
  }

  return tracking[n];
}

console.log(fibonacci(1) === 1);
console.log(fibonacci(2) === 1);
console.log(fibonacci(3) === 2);
console.log(fibonacci(8) === 21);
console.log(fibonacciMemoize(60));
