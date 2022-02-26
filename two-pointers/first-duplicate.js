// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

// Brute force approach: Use two nested for loops to find the repeated value.
// The outer loop picks each element in the array one by one while the inner loop is used
// To compare the with the current value that we are on.
// Time complexity is O(n^2) because the array is being iterated twice.
// Nothing is save into memory and therefore the space complexity is O(1).

function firstDuplicateArray(array) {
  // O(n^2) time | O(1) space - where n is the length of the input array
  // Set the first index to a number that equals the length of the array.
  // This value will change to the minimum index of the value that meets our condition.
  // In case it does not, that means there were no values foun that match.
  let minimumSecondIndex = array.length;
  // Iterate the array to grab each value
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    // Iterate the array to grab the other values
    for (let j = 0; j < array.length; j++) {
      const valueToCompare = array[j];
      // Compare values.
      // If they match, alter the value of minimumSecondIndex with the index of the compared value
      if (value[i] === valueToCompare[j])
        minimumSecondIndex = Math.min(minimumSecondIndex, j);
    }
  }
  // Exit the loops. If the value of minimumSecondIndex is still the same, return -1 (void)
  if (minimumSecondIndex === array.length) return -1;
  // Otherwise return the number at the index of minimumSecondIndex
  return array[minimumSecondIndex];
}

// Two pointers approach:
