const number = 1234567890;

const numArr = String(number)
  .split("")
  .map((a) => Number(a));

console.log(numArr);
