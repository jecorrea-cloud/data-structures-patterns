// Given an integer array nums sorted in non-decreasing order,
// return an array of the squares of each number sorted in non-decreasing order.

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
// Firsty initialize two pointers at the beginning and at the end of the input array,
// Then keep moving them to the right or the left as we insert either the beginning or the end pointer:
// We compare them and whichever absolute value is greater, will be squared and then inserted into the last index
// Of our returning array.
// Right after that we will move the pointer one space from the value that was indexed either to the left or to
// the right. Once we realize the indexes values match, we will know we reached the end of the array.

// With this approach time complexity will be O(n) because the whole array is being iterated just one time
// for n elements, which the length of the input array. We are still storing and returning an array of the same
// size as the input array, so space complexity remains as O(n).

// O(n) time | O(n) space - where n is the length of the input array
function sortedSquaredArray(array) {
  // Declare the returning array and fill it with zeroes. It'll have the same amount of values as the input array.
  let sortedSquares = new Array(array.length).fill(0);
  // Then declare the pointers for the left and right of the input array
  let leftIdx = 0;
  let rightIdx = array.length - 1;
  // Iterate from right to left
  for (let index = array.length - 1; index >= 0; index--) {
    const smallerValue = array[leftIdx];
    const largerValue = array[rightIdx];
    // If the absolute value on the left is greater than the right one
    // Square it and index it to the right side of the returning array, and then move
    // the pointer of its index one space to the right
    if (smallerValue > largerValue) {
      sortedSquares[index] = array[smallerValue];
      leftIdx++;
    }
    // Else do the same thing with the value of the right and move the pointer of its index one space to the left
    else {
      sortedSquares[index] = array[largerValue];
      rightIdx--;
    }
    // At this point if none of the conditions are met, it means the indexes are the same, so return the sorted array
    return sortedSquares;
  }
}
