// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Brute force approach: Generate all the squares and then sort the output array
// Because we are sorting, time complexity is O(nlogn).
// Space complexity is O(n), where n is the length of the array given we are storing and returning another array with that length

// O(nlogn) time | O(n) space - where n is the length of the input array
// function sortedSquaredArray(array) {
//   // Create a new array for the solution to avoid messing up the input one
//   const sortedSquares = new Array(array.length).fill(0);
//   // Iterate the input array to grab each value
//   for (let index = 0; index < array.length; index++) {
//     const value = array[index];
//     // Index the value to the solution array and then squared it
//     sortedSquares[index] = value * value;
//   }
//   // Sort the soution array and return it
//   sortedSquares.sort((a, b) => a - b);
//   return sortedSquares;
// }

// Two pointers approach: We're going to build the array from the right to the left.
//

// O(n) time | O(n) space - where n is the length of the input array
function sortedSquaredArray(array) {
  // Declare the returning array and fill it with zeroes. It'll have the same amount of values as the input array
  let sortedSquares = new Array(array.length).fill(0);
  // Then declare the pointers for the left and right of the input array
  let left = 0;
  let right = array.length - 1;
  // Iterate from right to left
  for (let index = array.length - 1; index >= 0; index--) {
    const smallerValue = array[left];
    const largerValue = array[right];
  }
}
