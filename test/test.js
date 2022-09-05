// function countVowels(word) {
//   let wordInLC = word.toLowerCase();
//   let counter = 0;
//   for (let i = 0; i < wordInLC.length; i++) {
//     if (
//       wordInLC[i] == "a" ||
//       wordInLC[i] == "e" ||
//       wordInLC[i] == "i" ||
//       wordInLC[i] == "o" ||
//       wordInLC[i] == "u"
//     ) {
//       counter++;
//     }
//   }
//   return counter;
// }

// console.log(countVowels("language"));

// -----------------------------------------------------------------------

// function patternPrintingI(n) {
//   let res = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       res += "* ";
//     }
//     res += "\n";
//   }
//   return res;
// }

// console.log(patternPrintingI(4));

// -----------------------------------------------------------------------

// function cyclicRotation(n, arr, k) {
//   for (let i = 0; i < k; i++) {
//     let last = arr.pop();
//     arr.unshift(last);
//   }
//   return arr;
// }

// console.log(cyclicRotation(5, [1, 2, 3, 4, 5], 3));

// -----------------------------------------------------------------------

// function patternPrintingII(n) {
//   let res = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       res += "* ";
//     }
//     res += "\n";
//   }

//   for (let i = n - 1; i > 0; i--) {
//     for (let j = 1; j <= i; j++) {
//       res += "* ";
//     }
//     res += "\n";
//   }
//   return res;
// }

// console.log(patternPrintingII(5));

//  --------------------------------------------------------------------------

