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

// function twoSum(nums, target) {
//   // O(n^2) time - where n is the length of the array | O(1) space
//   for (let i = 0; i < nums.length - 1; i++) {
//     const firstNum = nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       const secondNum = nums[j];
//       if (firstNum + secondNum === target) return [nums[i], nums[j]];
//     }
//   }
//   return [];
// }

// Hashtable approach: To avoid doing multiple runs in the array, we implement a hash table to which we will be
// adding each value present in the array as we iterate the array. To make sure we are getting the correct values,
// we will set our missing value to the substraction between the input target number and the current value we are in.
// If this missing value is present in the hash table, we will immediatly return its index along with the current value index.
// If nothing is found after the iteration then we return an empty array.
// This approach runs in linear time given the array is being traversed only once.

function twoSum(nums, target) {
  // O(n) time | O(n) space - where n is the length of the array
  // Declare the table
  const table = {};
  // Iterate the input array
  for (const [i, num] of nums.entries) {
    // Set the missing returning value equal to the substraction b/w the input target and the current
    // value in the array
    potentialMatch = target - num;
    // Check if the missing value is already in the hashtable
    if (potentialMatch in table) {
      return [nums.indexOf(potentialMatch), i];
    }
    // Otherwise add the array's current value to the hash table as a key paired with a value of true
    else {
      table[num] = true;
    }
  }
  // Base case: return empty if nothing was found
  return [];
}
