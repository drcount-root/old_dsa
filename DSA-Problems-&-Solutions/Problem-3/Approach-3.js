const reverserFunc = (input) => {
  if (!input || input.length < 2) {
    return "That's not a good input!";
  } else {
    return [...input].reverse().join("");
  }
};

console.log(reverserFunc("Hi My name is Andrei"));
console.log(reverserFunc(59350200));
// console.log(reverserFunc(-1589));
// console.log(reverserFunc(1));
// console.log(reverserFunc("a"));
// console.log(reverserFunc(543.21));
// console.log(reverserFunc(-543.21));
