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

// Brute force approach: Use two nested loops to compare each value with the other ones in the array.
// Time complexity will be squared because of the number of loops. Space complexity, though, is linear,
// given nothing is being saved into memory.
// function containsDuplicate(nums) {
//   // O(n^2) time - where n is the length of the array | O(1) space
//   for (let i = 0; i < nums.length; i++) {
//     const value = nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       const valueToCompare = nums[j];
//       if (value === valueToCompare) {
//         return true;
//       }
//     }
//   }

//   return false;
// }

// Efficient approach: To achieve an efficient time complexity, we implement a hashset that allows us to insert each element
// from the input array in big O of 1 time while at the same time compare if the value that is being added already exists in the hashset.
// Because the comparisons will only happen once, time complexity will be linear.
// Given we are creating a hashset that can store every element in the array, space complexity will be O(n), where n
// is the length of the input array.

function containsDuplicate(nums) {
  // O(n) time - where n is the length of the array | O(n) space - where n is the length of the array
  // Declare the new hashset
  const mySet = new Set();
  // Iterate the input array while comparing values
  for (const value of nums) {
    if (mySet.has(value)) return true;
    mySet.add(value);
  }
  // Exit the loop and return false if no duplicate was found
  return false;
}
