// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

// Constraints:

// 2 <= numbers.length <= 3 * 104
// -1000 <= numbers[i] <= 1000
// numbers is sorted in non-decreasing order.
// -1000 <= target <= 1000
// The tests are generated such that there is exactly one solution.

// Two-pointers approach: Implement two pointers. First have pointers at index first and last index,
// then iterate the array while adding both values.
// If the sum matches the target sum, immediatly return those two values.
// If it does not, then shift one of the pointers either to the right or the left. It will depend whether the sum is greater or less than the target sum
// We are not storing anything so the space complexity is linear (O(1)).
// Because the array is sorted beforehand, time complexity will be O(n), where n is the length of the array.

function twoSum(numbers, target) {
  // O(n) time - where n is the length of the array | O(1) space
  // First declare the pointers to the left and right of the array
  let left = 0;
  let right = numbers.length - 1;
  // Now iterate the array
  while (left < right) {
    // Variable that hold the sum of the two pointers
    const currentSum = numbers[left] + numbers[right];
    // Conditional to check if the sum matches the target sum
    if (currentSum === target) {
      return [left + 1, right + 1];
    }
    // If currentSum is less than target, move the left pointer one space to the right
    else if (currentSum < targetSum) {
      left++;
    }
    // If currentSum is less than target, move the right pointer one space to the left
    else if (currentSum > targetSum) {
      right--;
    }
  }
  // Base case if there are no two numbers that meet the condition
  return [];
}
