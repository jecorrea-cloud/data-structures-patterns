// Given two integers a and b, return the sum of the two integers without using the operators + and -.

// Example 1:

// Input: a = 1, b = 2
// Output: 3
// Example 2:

// Input: a = 2, b = 3
// Output: 5

// Constraints:

// -1000 <= a, b <= 1000

function getSum(a, b) {}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", getSum(1, 2));

  console.log("");

  console.log("Expecting: 5");
  console.log("=>", getSum(2, 3));
}

module.exports = getSum;
