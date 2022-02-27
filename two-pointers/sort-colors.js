// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Two pointers approach: Set a pointer at the beginning and at the end of the nums array.
// We then iterate the array and compare the current index value with either the value of the start or the end pointer
// While making sure we are looking for either 0 or 2 values to place at the beginning or end of the array.
// The array will be iterated once so time complexity will be equal to thesize of the input array.
// The space complexity is constant due to the array only being altered while not storing anything else in memory.
function sortColors(nums) {
  // O(n) time | O(1) space - where n is the size of the array
  // Set the two pointers at the first and last index of the input array
  let start = 0;
  let end = nums.length - 1;
  // Iterate the array.
  for (let index = 0; index <= nums.length; index++) {
    // Set a conditional.
    // If the current value is a zero we'll swap it with the value at the beginning of the array.
    // We will also move the pointer at the beginning one space to the right.
    if (nums[index] === 0) {
      // This swap is known as destructuring assignment
      [nums[index], nums[start]] = [nums[start], nums[index]];
      start++;
    }
    // Otherwise if the value is a two, we'll make sure to swap it at the end of the array.
    // We will move the pointer at the end and the current index value one space to the left.
    else if (nums[index] === 2) {
      [nums[index], nums[end]] = [nums[end], nums[index]];
      end--;
      index--;
    }
  }
  // Exit the iterator and return the sorted nums array
  return nums;
}
