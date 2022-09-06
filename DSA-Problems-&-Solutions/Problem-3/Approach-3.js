// Create a function that reverses a string/number(+/-)

// For example:

// 'Hi My name is Andrei' => 'ierdnA si eman yM iH'

// 59350200 => 205395

// -1589 => -9851

// 543.2100 => 12.345

// --------------------------------------------------

/*

[ Approach - 3 ]
BIG-O Time Complexity = O()
Space Complexity = O()

Pros - Works for numbers (+/-) & strings

*/

const reverserFunc = (input) => {
  return typeof input === "number"
    ? parseFloat([...input.toString()].reverse().join("")) * Math.sign(input)
    : input.split("").reverse().join("");
};

console.log(reverserFunc("Hi My name is Andrei"));
console.log(reverserFunc(59350200));
console.log(reverserFunc(-1589));
console.log(reverserFunc(1));
console.log(reverserFunc("a"));
console.log(reverserFunc(543.21));
console.log(reverserFunc(-5430.21));
