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

function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

// O(4+7n) => O(n)

// -------------------------------------------------
