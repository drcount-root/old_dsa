// Convert an array of numbers into a whole integer
// Integers : ...., -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, ....
// Whole numbers: 0, 1, 2, 3, 4, 5, ....

const theArr = [5, [46], [0, [2, [1]]], 730];

console.log(`[${theArr}] type is ` + typeof theArr);

let wholeInteger = +theArr.flat(Infinity).join("");
console.log(`${wholeInteger} type is ` + typeof wholeInteger);
