// Given an array of integers nums and an integer target, return the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Brute force solution: Implements two for loops and look for the solutions.
// This is not time efficient because it will traverse the array twice.
// This is space efficient because it does not need to save anything in memory

// function twoNumberSum(array, targetSum) {
//     // O(n^2) time | O(1) space
//     for (let i = 0; i < array.length - 1; i++) {
//       const firstNum = array[i];
//       for (let j = i + 1; j < array.length; j++) {
//         const secondNum = array[j];
//         if (firstNum + secondNum === targetSum) return [firstNum, secondNum];
//       }
//     }
//     return [];
//   }

// More efficient time solution: Implement two pointers. First sort the array.
// Have pointers at index first and last index and then iterate the array while adding both values
// We are still not storing anything so the space complexity is still O(1)

function twoNumberSum(array, targetSum) {
  // O(nlog(n)) time | O(1) space

  // First sort the array
  array.sort((a, b) => a - b);
  // Then declare the pointers to the left and right
  let left = 0;
  let right = array.length - 1;
  // Now iterate the array
  while (left < right) {
    // Variable that hold the sum of the two pointers
    const currentSum = array[left] + array[right];
    // Conditional to check if the sum matches the target sum
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    }
    // If currentSum is less than sum, move the left pointer to the right
    else if (currentSum < targetSum) {
      left++;
    }
    // If currentSum is less than sum, move the left pointer to the left
    else if (currentSum > targetSum) {
      right--;
    }
  }
  // Base case if there are no two numbers that meet the condition
  return [];
}