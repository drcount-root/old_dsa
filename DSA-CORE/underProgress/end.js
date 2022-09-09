// In a party of N people, each person is denoted by an integer. Couples are represented by the same number. Find out the only single person in the party of couples.

// Example 1:

// Input: N = 5
// arr = {1, 2, 3, 2, 1}
// Output: 3
// Explaination: Only the number 3 is single.

// Example 2:

// Input: N = 11
// arr = {1, 2, 3, 5, 3, 2, 1, 4, 5, 6, 6}
// Output: 4
// Explaination: 4 is the only single.
// ----------------------------------------------------------

// returns all repetitive items
const rep = function (n, arr) {
  const uniqueArr = [];
  let i, j;

  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (i === j) continue;
      if (arr[i] === arr[j]) break;
    }

    if (j === n) uniqueArr.push(arr[i]);
  }

  return uniqueArr;
};

console.log(rep(8, [1, 2, 3, 2, 1, 5, 3, 4]));

// -----------------------------------------------------------

// Can't return multiple items even if they are not repetitive
const rep1 = function (n, arr) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < n; i = i + 2) {
    if (arr[i] !== arr[i + 1]) {
      return arr[i];
    }
  }
};

console.log(rep1(11, [1, 2, 3, 5, 3, 2, 1, 4, 5, 6, 6]));
