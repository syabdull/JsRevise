//js program to print the reverse of a number

function reverseOfNumber(num) {
  while (num != 0) {
    let rem = num % 10;
    console.log(rem);
    num = Math.floor(num / 10);
  }
}

reverseOfNumber(566442);
