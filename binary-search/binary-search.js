// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Recursive approach: Initialize a left and right pointer in the array and calculate a middle pointer based on the index #s.
// Now, if the middle pointer value equals the input target number, we return the index #.
// Otherwise if the value is greater than it, we 'split' the array and take the values from the left of the
// middle pointer while moving the right pointer one space from the middle index, and repeat the process.
// If the value is less than it,  we 'split' the array and take the values from the right of the
// middle pointer while moving the left pointer one space from the middle index, and repeat the process.
// Because we are eliminating half the values to operate the array every iteration, time complexity will be
// O(log(n)). Space complexity will also be O(log(n)) because of the frames of the call stack that will be used up
//
// O(log(n)) time | O(log(n)) space - where n is the length of the input array
function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}

function binarySearchHelper(array, target, left, right) {
  // Base case in case the input target is not valid
  if (left > right) return -1;
  // Declare the middle pointer
  const middle = Math.floor((left + right) / 2);
  // Declare the value of the middle pointer
  const potentialMatch = array[middle];
  // Set a conditional to see if it matches target
  if (potentialMatch === target) {
    return middle;
  }
  // If it is greater than it, split the array and take the values from the left. Use recursion
  else if (target < potentialMatch) {
    return binarySearchHelper(array, target, left, middle - 1);
  }
  // If it is less than it, split the array and take the values from the right. Use recursion
  else {
    return binarySearchHelper(array, target, middle + 1, right);
  }
}

// Iterative approach: Unlike the previous approach, an iterator is being implemented.
// The process will remain the same: We first iterate the array and declare two pointers at the beginning
// & end of the input array.
// Next, calculate the middle index and its value. From there we split the array either to the left or right by
// Just changing the values of the right or left pointers
// Time complexity will remain to be O(log(n)), whereas space complexity will be constant, given we are not
// Saving anything in memory.
// O(log(n)) time | O(1) space - where n is the size of the input array
function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}

function binarySearchHelper(array, target, left, right) {
  // Iterate the array
  while (left <= right) {
    // Declare the middle pointer
    const middle = Math.floor((left + right) / 2);
    // Declare the value of the middle pointer
    const potentialMatch = array[middle];
    // Set a conditional to see if it matches target
    if (potentialMatch === target) {
      return middle;
    }
    // If it is greater than it, split the array and declare the right pointer from the left. Keep iterating.
    else if (target < potentialMatch) {
      right = middle - 1;
    }
    // If it is less than it, split the array and take the values from the right. Keep
    else {
      left = middle + 1;
    }
  }
}
