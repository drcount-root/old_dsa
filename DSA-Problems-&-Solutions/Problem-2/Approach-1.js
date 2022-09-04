// PROBLEM:
// Find the pair in the array that equals the sum given.
// [1, 2, 3, 9] = 8
// [1, 2, 4, 4] = 8
// The array is sorted in order.
// A number can appear in the array more than one time. See example 2.
// Return true or false.

// ----------------------------------------------------

/*

[ Approach - 1 ]
BIG-O Time Complexity = O()
Space Complexity = O()

*/

function hasPairWithSum(arr, sum) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }

  return false;
}

console.log(hasPairWithSum([6, 4, 3, 2, 1, 7], 9));
console.log(hasPairWithSum([1, 2, 4, 4], 8));
console.log(hasPairWithSum([1, 2, 3, 9], 8));
