// print n fibobacci numbers

function fibonacciNumbers(n) {
  let a = 0;
  let b = 1;
  let c;
  for (let i = 1; i <= n; i++) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
  }
}

fibonacciNumbers(5);
