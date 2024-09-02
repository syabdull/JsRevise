// js programt to  print  all the prime numbers

// program to check the given number is prime or not

function checkPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}
// function to print all the prime numbers

function printPrimeNumbers(num) {
  for (let i = 0; i <= num; i++) {
    if (checkPrime(i)) {
      console.log(i);
    } else {
      console.log("not a prime", i);
    }
  }
}

printPrimeNumbers(100);
