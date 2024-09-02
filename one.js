//print digits of a number from  left to right

let num = 223223332;

function printDigits(num) {
  //findin the count of digits

  let temp = num;
  let count = 0;
  while (temp != 0) {
    temp = Math.round(temp / 10);
    count++;
  }
  console.log("count", count);
  let dsr = Math.pow(10, count - 1);
  console.log("dsr", dsr);

  while (dsr != 0) {
    console.log(Math.floor(num / dsr));
    num = num % dsr;
    dsr = Math.floor(dsr / 10);
  }
}

printDigits(3344334);
