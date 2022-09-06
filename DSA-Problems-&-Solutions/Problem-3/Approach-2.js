// Create a function that reverses a string/number(+/-)

// For example:

// 'Hi My name is Andrei' => 'ierdnA si eman yM iH'

// 59350200 => 205395

// -1589 => -9851

// 543.2100 => 12.345

// --------------------------------------------------

/*

[ Approach - 2 ]
BIG-O Time Complexity = O()
Space Complexity = O()

Cons: Not works for numbers

*/

function reverserFunc(input) {
  // Check input
  if (!input || input.length < 2 || typeof input !== "string") {
    return "Hmm that's not a good input!";
  }

  const backwards = [];
  const totalItems = input.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(input[i]);
  }

  console.log(backwards);

  return backwards.join("");
}

console.log(reverserFunc("Hi My name is Andrei"));
console.log(reverserFunc("a"));
