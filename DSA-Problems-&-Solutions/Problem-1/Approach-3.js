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

/*

[ Approach - 3 ]
BIG-O Time Complexity = O(m*n)
Space Complexity = O(1), as not creating any variable

*/

const arr1 = ["a", "b", "c", "x"];
const arr2 = ["z", "y", "i"];
const arr3 = ["z", "c", "i"];

function containsCommonFunc(m, n) {
  return m.some((item) => n.includes(item));
}

console.log(containsCommonFunc(arr1, arr2));
console.log(containsCommonFunc(arr1, arr3));
