// Given two arrays that are sorted. Merge them into one which will also be sorted. No duplicate items allowed in the resultant array.

// For example:
// [0, 3, 4, 30] & [4, 6, 31, 4] => [0, 3, 4, 6, 30, 31]

/*

[ Approach - 1 ]

BIG-O Time Complexity = O()
Space Complexity = O()

*/

const arr1 = [0, 3, 4, 30];
const arr2 = [4, 6, 31, 4];

const merger = (a, b) => {
  let mergedArr = a.concat(b).sort((x, y) => x - y);
  return [...new Set(mergedArr)];
};

console.log(merger(arr1, arr2));

// A Set is a collection of unique values.
// First, convert an array of duplicates to a Set. The new Set will implicitly remove duplicate elements.
// Then, convert the set back to an array.
