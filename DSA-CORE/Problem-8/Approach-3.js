// Convert a whole integer into an array

// For example:
// 546021730 => [5, 4, 6, 0, 2, 1, 7, 3, 0]

/*

[ Approach - 3 ]

BIG-O Time Complexity = O()
Space Complexity = O()

*/

// Using reduce() method
// The reduce function is used to reduce the array into a single value and execute a provided function for each value of array.

// Approach

// Store the integer value in a variable.
// Typecast the integer into a string.
// Using the spread operator to form and array of character.
// Iterate over that array using the reduce() method.
// Using the reduce() method convert the array of strings into an array of Integers.

const myInt = 546021730;

// number to string convertion
const temp = "" + myInt;
// forming array with numbers as element
const intArr = [...temp].reduce((acc, n) => acc.concat(+n), []);

// Print the result array
console.log(intArr);
