//js program to find the inverse of a number

function inverseNumber(num) {
  let temp = num;
  let resultantNumber = 0;
  let count = 1;
  while (temp != 0) {
    let pos = temp % 10;
    temp = Math.floor(temp / 10);
    let addingNum = count * Math.pow(10, pos - 1);
    resultantNumber = resultantNumber + addingNum;
    count++;
  }
  console.log(resultantNumber);
}
inverseNumber(21453);
