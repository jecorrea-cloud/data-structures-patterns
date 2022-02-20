// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Brute force approach: Generate all the squares and then sort the output array
// Because we are sorting, time complexity is O(nlogn).
// Space complexity is O(n), where n is the length of the array given we are storing and returning another array with that length

// O(nlogn) time | O(n) space
function sortedSquaredArray(array) {
  // Create a new array for the solution to avoid messing up the input one
  const sortedSquares = new Array(array.length).fill(0);
  // Iterate the input array to grab each value
  for (let index = 0; index < array.length; index++) {
    const value = array[index];
    // Index the value to the solution array and then squared it
    sortedSquares[index] = value * value;
  }
  // Sort the soution array and return it
  sortedSquares.sort((a, b) => a - b);
  return sortedSquares;
}
