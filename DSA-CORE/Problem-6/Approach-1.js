// Factorial in iterative way
// For example:
// 5! = 120

/*

[ Approach - 1 ]

BIG-O Time Complexity = O(n)
Space Complexity = O(1)

*/

const factoFunc = (n) => {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
};

console.log(factoFunc(5));
