// const nemo = ["nemo"];

// function findNemo(arr) {
//   let ans = "";

//   let t0 = performance.now();

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "nemo") {
//       ans = "Found NEMO!";
//     }
//   }

//   let t1 = performance.now();

//   let res = `${ans} & Call to find Nemo took ${t1 - t0} miliseconds`;

//   return res;
// }

// console.log(findNemo(nemo));

// ----------------------------------------------------------------------

// const nemo = ["nemo"];
// const everyone = [
//   "dory",
//   "bruce",
//   "marlin",
//   "nemo",
//   "gill",
//   "bloat",
//   "nigel",
//   "squirt",
//   "darla",
//   "hank",
// ];

// const large = new Array(100).fill("nemo");

// function findNemo(arr) {
//   let t0 = performance.now();

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "nemo") {
//       console.log("Found NEMO!");
//     }
//   }

//   let t1 = performance.now();

//   return `Call to find Nemo took ${t1 - t0} miliseconds`;
// }

// console.log(findNemo(nemo));
// console.log(findNemo(everyone));
// console.log(findNemo(large));

// ----------------------------------------------------------------------

// const nemo = ["nemo"];
// const everyone = [
//   "dory",
//   "bruce",
//   "marlin",
//   "nemo",
//   "gill",
//   "bloat",
//   "nigel",
//   "squirt",
//   "darla",
//   "hank",
// ];

// const large = new Array(100).fill("nemo");

// function findNemo(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "nemo") {
//       console.log("Found NEMO!");
//     }
//   }
// }

// console.log(findNemo(nemo));
// console.log(findNemo(everyone));
// console.log(findNemo(large));

// -------------------------------------------------------------

// function compressFirstBox(boxes) {
//   console.log(boxes[0]);
// }

// compressFirstBox([7, 1, 4, 6]);

// -------------------------------------------------
// function funChallenge(input) {
//   let a = 10;
//   a = 50 + 3;

//   for (let i = 0; i < input.length; i++) {
//     anotherFunction();
//     let stranger = true;
//     a++;
//   }
//   return a;
// }

// -------------------------------------------------

// function anotherFunChallenge(input) {
//   let a = 5; // O(1)
//   let b = 10; // O(1)
//   let c = 50; // O(1)
//   for (let i = 0; i < input; i++) {
//     // O(n)
//     let x = i + 1; // O(n)
//     let y = i + 2; // O(n)
//     let z = i + 3; // O(n)
//   }
//   for (let j = 0; j < input; j++) {
//     // O(n)
//     let p = j * 2; // O(n)
//     let q = j * 2; // O(n)
//   }
//   let whoAmI = "I don't know"; // O(1)
// }

// O(4+7n) => O(n)

// -------------------------------------------------

// const nemo = ["nemo"]; // O(1)

// function findNemo1(array) {
//   // O (1)
//   for (let i = 0; i < array.length; i++) {
//     // O(n)
//     if (array[i] === "nemo") {
//       // O(n)
//       console.log("Found NEMO!"); // O(1)
//     }
//   }
// }

// findNemo1(nemo);

// O(n)

// ---------------------------------------------------------------

// const everyone = [
//   "dory",
//   "bruce",
//   "marlin",
//   "nemo",
//   "gill",
//   "bloat",
//   "nigel",
//   "squirt",
//   "darla",
//   "hank",
// ];

// function foundNemo(everyone) {
//   for (let i = 0; i < everyone.length; i++) {
//     // O(n)
//     console.log("Running..."); // O(n)
//     if (everyone[i] === "nemo") {
//       // O(n)
//       console.log("Found Nemo!"); // O(1)
//       break; // O(1)
//     }
//   }
// }

// console.log(foundNemo(everyone));

// O(2+3n) => O(n)

// --------------------------------------------------------

// function printFirstItemThenFirstHalfThenSayHi100Times(items) {
//   console.log(items[0]); // O(1)

//   var middleIndex = Math.floor(items.length / 2);
//   var index = 0;

//   while (index < middleIndex) {
//     // O(n/2)
//     console.log(items[index]);
//     index++;
//   }

//   for (var i = 0; i < 100; i++) {
//     // O(100)
//     console.log("hi");
//   }
// }

// O(1 + n/2 + 100) => O(n)

// We are in=gnoring variable assignments and small calculations for this example.

// ----------------------------------------------------

// function compressBoxesTwice(boxes) {
//   boxes.forEach(function (boxes) {
//     // O(n)
//     console.log(boxes);
//   });

//   boxes.forEach(function (boxes) {
//     // O(n)
//     console.log(boxes);
//   });
// }

// O(n + n) = O(2n) => O(n)

// ----------------------------------------------------

//Log all pairs of array

const arr = [1, 2, 3, 4, 5];
// let t0 = performance.now();

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    console.log(arr[i], arr[j]);
  }
}

// let t1 = performance.now();

// console.log(`Time taken = ${t1 - t0}`);

// For nested loops => O(n) * O(n) = O(n * n) => O(n^2)

// --------------------------------------------------------

