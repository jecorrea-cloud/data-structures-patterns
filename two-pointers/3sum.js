// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []

// Constraints:

// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105

// Two Pointers Approach: We firstly assume the array is unorganized and begin by sorting it
// We then proceed to declare two pointers for the next c and last item in the array and the returning array.
// Next we iterate and compare values that match our target sum while moving the pointers accordingly.
// Every time a triplet of values meet the condition, we append them to the returning array.
// After iterating each value from the input array and saving the triplets in the returning array
// Because we are iterating the array twice, the time complexity is O(n^2)
// We are saving an array in memory to return, so at worst case space complexity will be O(n)
// Because there is a chance the returning array contains the same amount

function threeSum(nums) {
  // O(n^2) time | O(n) space - where n is the length of the array
  // Sort the input array and declare the returning array. Set it to empty.
  nums.sort((a, b) => a - b);
  const triplets = [];

  for (let index = 0; index < num.length; index++) {
    let left = index + 1;
    let right = nums.length - 1;
    // Now iterate
    while (left < right) {
      // Declare the sum
      const sum = nums[index] + nums[left] + nums[right];
      // Conditional to check if the three numbers sum matches the target sum (zero)
      // If it does, push the triplets as an array to the returning array and move
      // the pointers one space to the right and left
      if (sum === 0) {
        triplets.push([nums[index], nums[left], nums[right]]);
        left++;
        right--;
      }
      // If the sum is less than the target sum, move the left pointer one space to the right
      else if (sum < 0) {
        left++;
      }
      // If the sum is greater than the target sum, move the right pointer one space to the left
      else if (sum > 0) {
        right--;
      }
    }
  }
  return triplets;
}
