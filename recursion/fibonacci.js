function fibonacciBUMemoize(n) {
  //1, 1, 2, 3, 5, 8, 13, 21
  const fibs = [0, 1];

  function searchFibs(i, limit) {
    //base cases
    if (i > limit) return;

    //processing
    fibs[i] = fibs[i - 1] + fibs[i - 2];

    //recursive cases
    searchFibs(i + 1, limit);
  }

  searchFibs(2, n);

  //recursive case
  return fibs[n];
}

function fibonacciPure(n) {
  return n < 2 ? n : fibonacciPure(n - 1) + fibonacciPure(n - 2);
}

function fibonacciTD(n) {
  //1, 1, 2, 3, 5, 8, 13, 21
  //base case
  if (n === 0) return 0;
  if (n === 1) return 1;
  //recursive case
  else return fibonacciTD(n - 2) + fibonacciTD(n - 1);
}

function fibonacciTDMemoize(n, tracking = []) {
  //0, 1, 1, 2, 3, 5, 8, 13, 21

  //base case
  if (n === 0) return 0;
  if (n === 1) return 1;

  //recursive case
  if (!tracking[n]) {
    tracking[n] =
      fibonacciTDMemoize(n - 2, tracking) + fibonacciTDMemoize(n - 1, tracking);
  }

  return tracking[n];
}

console.log(fibonacciPure(1) === 1);
console.log(fibonacciPure(2) === 1);
console.log(fibonacciPure(3) === 2);
console.log(fibonacciPure(8) === 21);
// console.log(fibonacciBUMemoize(60));
// console.log(fibonacciTDMemoize(60));
