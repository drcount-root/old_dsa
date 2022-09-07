// Flatten an array which includes arrays (maybe multidimentional) as items.

// For example:
// [[2, [4, 9]], 6, [5, 32]] => [2, 4, 9, 6, 5, 32]

/*

[ Approach - 2 ]

BIG-O Time Complexity = O()
Space Complexity = O()

*/

const inputArr = [
  [2, [4, [[9]]]],
  6,
  [[{ name: "Hamilton", age: 69 }, 89, NaN, undefined]],
  [5, [[[["LoL32"]]]]],
];

const finalArr = [];

function flattenArr(inputArr) {
  //   let t0 = performance.now();
  for (let i of inputArr) {
    if (Array.isArray(i)) {
      flattenArr(i);
    } else {
      finalArr.push(i);
    }
  }
  //   let t1 = performance.now();

  //   return [finalArr] + `\tET = ${t1 - t0} ms`;
  return finalArr;
}

console.log(flattenArr(inputArr));
