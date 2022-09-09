// Convert a whole integer into an array

// For example:
// 546021730 => [5, 4, 6, 0, 2, 1, 7, 3, 0]

/*

[ Approach - 2 ]

BIG-O Time Complexity = O()
Space Complexity = O()

*/

// Using map() method
// The map() method in JavaScript creates an array by calling a specific function on each element present in the parent array. It is a non-mutating method. Generally, map() method is used to iterate over an array and calling a function on every element of the array.

// Approach

// 1. Store the integer value in a variable.
// 2. Typecast the integer into a string.
// 3. Using the split() method to make it an array of strings.
// 4. Iterate over that array using the map() method.
// 5. Using the map() method returns the array of strings into an array of Integers.

const myInt = 546021730;

// Here we typecasting the num
// Splitting the num, so that
// we got an array of strings
// Then use map function to
// convert the array of strings
// into array of numbers

const myArr = String(myInt)
  .split("")
  .map((num) => Number(num));

console.log(myArr);
