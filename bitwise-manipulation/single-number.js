// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

// Constraints:

// 1 <= nums.length <= 3 * 10^4
// -3 * 10^4 <= nums[i] <= 3 * 10^4
// Each element in the array appears twice except for one element which appears only once.

// Bitwise approach: Use the bitwise XOR operator. This operator returns zero if the bits
// of two compared values are the same, or value n if it is being ccompared to zero.
// Taking this into consideration, we can iterate over the array and compare each value with
// a variable that will hold zero initially. Because we are guaranteed there are duplicates
// and one unique value, these duplicates will cancel each other out regardless of the order
// they are in the array and eventually yield to the unique value.
// Time complexity will be linear given the array will be traversed only once.
// Space complexity is constant because nothing is being saved into memory.

function singleNumber(nums) {
  // O(n) time - where n is the length of the input array | O(1) space
  let res = 0;
  for (const value of nums) {
    res = res ^ value;
  }
  return res;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(singleNumber([2, 2, 1]));

  console.log("");

  console.log("Expecting: 4");
  console.log("=>", singleNumber([4, 1, 2, 1, 2]));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", singleNumber([1]));
}

module.exports = singleNumber;
