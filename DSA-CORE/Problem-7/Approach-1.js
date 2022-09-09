// Convert an array of numbers into a whole integer
// Whole numbers: 0, 1, 2, 3, 4, 5, ....

// For example:
// [5, [46], [0, [2, [1]]], 730] => 546021730

/*

[ Approach - 1 ]

BIG-O Time Complexity = O()
Space Complexity = O()

*/

const theArr = [5, [46], [0, [2, [1]]], 730];

console.log(`[${theArr}] type is ` + typeof theArr);

let wholeInteger = +theArr.flat(Infinity).join("");

console.log(`${wholeInteger} type is ` + typeof wholeInteger);
