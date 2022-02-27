// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// First approach: Initialize a left and right pointer in the array and calculate a middle pointer based on the index #s.
// Now, if the middle pointer value equals the input target number, we return the index #.
// Otherwise if the value is greater than it, we 'split' the array and take the values from the left of the
// middle pointer and repeat the process.
// If the value is less than it,  we 'split' the array and take the values from the right of the
// middle pointer and repeat the process.
// O(log(n)) time | O(log(n)) space
function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}

function binarySearchHelper(array, target, left, right) {
  // Base case in case the input array is not valid
  if (left > right) return -1;
  // Declare the middle pointer
  const middle = Math.floor((left + right) / 2);
  // Declare the value of the middle pointer
  const potentialMatch = array[middle];
  // Set a conditional to see if it matches target
  if (potentialMatch === target) {
    return middle;
  } else if (target < potentialMatch) {
    return binarySearchHelper(array, target, left, middle - 1);
  } else {
    return binarySearchHelper(array, target, middle + 1, right);
  }
}

// Space optimal approach:
// O(log(n)) time | O(1) space
