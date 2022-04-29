// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

// Brute force approach: Use two nested loops to compare each value with the other ones in the array

function containsDuplicate(array) {
  // O(n^2) time | O(1) space
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    for (let j = 0; j < array.length; j++) {
      const valueToCompare = array[j];
      if (value === valueToCompare) {
        return true;
      }
    }
  }

  return false;
}
