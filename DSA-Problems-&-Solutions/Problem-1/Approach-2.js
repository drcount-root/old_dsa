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

[ Approach - 2 ]
BIG-O Time Complexity = O(a+b)
Space Complexity = O(a), as we are creating a new object here & adding the first array into this object.

*/

const arr1 = ["a", "b", "c", "x"];
const arr2 = ["z", "y", "i"];
const arr3 = ["z", "c", "i"];

/*
arr1 => obj{
    a: true,
    b: true,
    c: true,
    x: true
}
arr2[index] === obj.properties
*/

function containsCommonsFunc(m, n) {
  /* loop through first array and create object where properties === items in the array */
  let map = {};
  for (let i = 0; i < m.length; i++) {
    if (!map[m[i]]) {
      const item = m[i];
      map[item] = true;
    }
  }

  /* loop through second array and check if item in second array exists on created object */
  for (let j = 0; j < n.length; j++) {
    if (map[n[j]]) {
      return true;
    }
  }
  return false;
}

console.log(containsCommonsFunc(arr1, arr2));
console.log(containsCommonsFunc(arr1, arr3));
