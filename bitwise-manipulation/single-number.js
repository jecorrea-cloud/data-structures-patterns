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

// Bitwise approach: Use the bitwise XOR operator. Anything that is compared.
// Traverse the array once.
// Time complexity will be linear given the array will be traversed only once.
// Space complexity is constant because nothing is being saved into memory.

function singleNumbers(nums) {
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
  console.log(singleNumbers([2, 2, 1]));

  console.log("");

  console.log("Expecting: 4");
  console.log("=>", singleNumbers([4, 1, 2, 1, 2]));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", singleNumbers([1]));
}

module.exports = findDuplicate;
