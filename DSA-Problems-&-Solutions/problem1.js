// PROBLEM:
// Given 2 arrays, create a function that
// let's a user know (true / false) whether
// these two arrays contain any common items
// For example:
// const arr1 = ['a', 'b', 'c', 'x'];
// const arr2 = ['z', 'y', 'i'];
// Should return false.
// ----------------------------------
// const arr1 = ['a', 'b', 'c', 'x'];
// const arr2 = ['z', 'y', 'x'];
// Should return true.

// -----------------------------------------------------------------------------------

// [ Approach - 1 ]  BIG-O Time Complexity = O(a*b)

// const arr1 = ["a", "b", "c", "x"];
// const arr2 = ["z", "y", "i"];

// const commonFinder = function (arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// console.log(commonFinder(arr1, arr2));

// -----------------------------------------------------------------------------------

// [ Approach - 2 ]

const arr1 = ["a", "b", "c", "x"];
const arr2 = ["z", "y", "i"];

// arr1 => obj{
//     a: true,
//     b: true,
//     c: true,
//     x: true
// }
// arr2[index] === obj.properties

const containsCommonsFunc = function (arr1, arr2) {
  // loop through first array and create object where properties === items in the array
  // loop through second array and check if item in second array exists on created object.
};

// O(a+b)
