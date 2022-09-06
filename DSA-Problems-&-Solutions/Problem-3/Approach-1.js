// Create a function that reverses a string/number(+/-)

// For example:

// 'Hi My name is Andrei' => 'ierdnA si eman yM iH'

// 59350200 => 205395

// -1589 => -9851

// 543.2100 => 12.345

// --------------------------------------------------

/*

[ Approach - 1 ]
BIG-O Time Complexity = O()
Space Complexity = O()

Pros - Works for numbers (+/-) & strings

*/

const reverserFunc = function (input) {
  if (!input || input.length < 2) {
    return "That's not a good input!";
  } else if (input.length >= 2 && typeof input === "string") {
    return input.split("").reverse().join("");
  } else {
    return (
      parseFloat(input.toString().split("").reverse().join("")) *
      Math.sign(input)
    );
  }
};

console.log(reverserFunc("Hi My name is Andrei"));
console.log(reverserFunc(59350200));
console.log(reverserFunc(-1589));
console.log(reverserFunc(1));
console.log(reverserFunc("a"));
console.log(reverserFunc(543.21));
console.log(reverserFunc(-543.21));

// input.toString() converts the given number into a String.

// input.split("") converts the String into an Array of characters. We do this so we can use the Array reverse function.

// input.reverse() reverses the order of the items in the array.

// input.join('') reassembles the reversed characters into a String.

// parseFloat(input) converts input into a float from a String. '0012345-' => 12345. parseFloat runs in the end (even though it is on the first line of the function) on the reversed number and removes any leading zeroes.

// Math.sign(input) multiplies the number with the sign of the original number provided.
// original input = -5432100, need -12345
// input = 12345 // after doing input.toString().split("").reverse().join("")
// input * Math.sign(-5432100)
// return input = -12345
