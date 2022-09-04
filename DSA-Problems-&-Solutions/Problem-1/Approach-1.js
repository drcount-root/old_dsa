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

[ Approach - 1 ]
BIG-O Time Complexity = O(a*b)
Space Complexity = O(1), as we are not creating any new variable.

*/

const arr1 = ["a", "b", "c", "x"];
const arr2 = ["z", "y", "i"];
const arr3 = ["z", "c", "i"];

function commonFinder(m, n) {
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < n.length; j++) {
      if (m[i] === n[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(commonFinder(arr1, arr2));
console.log(commonFinder(arr1, arr3));
