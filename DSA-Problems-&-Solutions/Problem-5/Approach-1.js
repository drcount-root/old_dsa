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
