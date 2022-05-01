// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// Brute force approach: We implement two neested loops and loop through the array for each existing index
// until we come accross the answer.
// This is not time efficient because it will traverse the array twice at worst.
// This is space efficient because it does not need to save anything in memory

function twoSum(nums, target) {
  // O(n^2) time | O(1) space
  for (let i = 0; i < nums.length - 1; i++) {
    const firstNum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const secondNum = nums[j];
      if (firstNum + secondNum === target) return [firstNum, secondNum];
    }
  }
  return [];
}
