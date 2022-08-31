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

function compressFirstBox(boxes) {
  console.log(boxes[0]);
}

compressFirstBox([7, 1, 4, 6]);
