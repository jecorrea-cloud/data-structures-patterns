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
// Have pointers at index first and last index and then sum them
// We are still not storing anything so the space complexity is still O(1)

function twoNumberSum(array, targetSum) {
  // O(nlog(n)) time | O(1) space

  // First sort the array
  array.sort((a, b) => a - b);
  // Then declare the pointers to the left and right
  let left = 0;
  let right = array.length - 1;
  // Nown iterate the array
  while (left < right) {
    const sum = array[left] + array[right];
    if (sum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  // Base case if there are no two numbers that meet the condition
  return [];
}
