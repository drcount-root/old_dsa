const nemo = ["nemo"];

function findNemo(arr) {
  let ans = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") {
      ans = "Found NEMO!";
    }
  }
  return ans;
}

console.log(findNemo(nemo));
