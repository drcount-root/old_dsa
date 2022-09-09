// Convert a whole integer into an array

// For example:
// 546021730 => [5, 4, 6, 0, 2, 1, 7, 3, 0]

/*

[ Approach - 1 ]

BIG-O Time Complexity = O()
Space Complexity = O()

*/

// Using Array.form() method
// Array.form() method returns an Array object from any object with a length property or an iterable object.

// Approach

// 1. Store the number in a variable
// 2. Use Array.from() method and in its first parameter enter the string type cast value.
// 3. In the second parameter, we use a function i.e. myFunc, at every iteration the function will be called.
// 4. The myFunc function will take a parameter that was returned by the iteration of Array.from() method. We typecast the number into a string so the type of parameter is a string, but we will typecast it into integer and return it.
// 5. The value returned by the Array.from() is our result.

const myInt = 546021730;

const myFunc = (num) => Number(num);

// Getting the string as a parameter
// and typecasting it into an integer

const numArr = Array.from(String(myInt), myFunc);

console.log(numArr);
