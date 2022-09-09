// Factorial in recursive way
// For example:
// 5! = 120

/*

[ Approach - 2 ]

BIG-O Time Complexity = O(n)
Space Complexity = O(n)

*/

const recFactoFunc = (n) => {
  if (n === 0) return 1;

  return n * recFactoFunc(n - 1);
};

console.log(recFactoFunc(5));

// fact(n) returns n * fact(n-1) means: fact(5) returns 5 * fact(4) = 5 * 24 = 120
// fact(4) returns 4 * fact(3) = 4 * 6 = 24
// fact(3) returns 3 * fact(2) = 3 * 2 = 6
// fact(2) returns 2 * fact(1) = 2 * 1 = 2
// fact(1) returns 1 * fact(0) = 1
