// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Two pointers approach: Set a pointer at the beginning and at the end of the nums array
// Iterate
// The space complexity is constant due to the array being altered while not storing anything in memory
function sortColors(nums) {
  // O(n) time | O(1) space
  // Set the two pointers
  let start = 0;
  let end = nums.length - 1;

  for (let index = 0; index < end; index++) {
    if (nums[index] === 0) {
      [nums[index], nums[start]] = [nums[start], nums[index]];
      start++;
    } else if (nums[index] === 2) {
      [nums[index], nums[end]] = [nums[end], nums[index]];
      end--;
    }
  }

  return nums;
}
