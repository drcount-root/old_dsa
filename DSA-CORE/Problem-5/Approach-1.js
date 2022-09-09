// Flatten an array which includes arrays (maybe multidimentional) as items.

// For example:
// [[2, [4, 9]], 6, [5, 32]] => [2, 4, 9, 6, 5, 32]

/*

[ Approach - 1 ]

BIG-O Time Complexity = O()
Space Complexity = O()

*/

const inputArr = [
  [2, [4, [[9]]]],
  6,
  [[{ name: "Hamilton", age: 69 }, 89, NaN, undefined]],
  [5, [[[["LoL32"]]]]],
];
// let t0 = performance.now();
console.log(inputArr.flat(Infinity));
// let t1 = performance.now();
// console.log(`ET = ${t1 - t0} ms`);

// -----------------------------------------------------------------------------------------------------------------------------------

// Use of arr.flat() => Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const arr = [1, [2, 3], 4, [5, [6, 7]]];

const flattedArr = arr.flat();

console.log(flattedArr); // arr.flat() or arr.flat(1) can only get in 1 layer deep, o/p: [1, 2, 3, 4, 5, [6, 7]]

const flattedArr2 = arr.flat(2);

console.log(flattedArr2); // o/p: [1, 2, 3, 4, 5, 6, 7]

// Or Simply do arr.flat(Infinity) to flatten any depth

console.log(arr.flat(Infinity));
