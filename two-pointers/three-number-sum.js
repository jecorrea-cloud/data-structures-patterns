// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that
// i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Two Pointers Approach: We firstly assume the array is unorganized and begin by sorting it
// We then proceed to declare two pointers for the second and last item in the array
// Because we are iterating the array twice, the time complexity is O(n^2)
// We are saving an array in memory to return, so at worst case space complexity will be O(n)
// Because there is a chance the returning array contains the same amount

function threeNumberSum(array, targetSum) {
  // O(n^2) time | O(n) space
  // Sort the input array and declare the returning array. Set it to empty.
  array.sort((a, b) => a - b);
  const triplets = [];
  // Now declare pointers in an array at the position of the second & the last index
  // And set the first index
  for (let index = 0; index < array.length - 2; index++) {
    let left = index + 1;
    let right = array.length - 1;
    // Now iterate
    while (left < right) {
      // Variable that hold the sum of the two pointers values and the current value that is being looped
      const currentSum = array[index] + array[left] + array[right];
      // Conditional to check if the three numbers sum matches the target sum
      // If it does, push the sum to the returning array and move the pointers one space to the right and left
      if (currentSum === targetSum) {
        triplets.push([array[index], array[left], array[right]]);
        left++;
        right--;
      }
      // If currentSum is less than the target sum, move the left pointer one space to the right
      else if (currentSum < targetSum) {
        left++;
      }
      // If currentSum is less than the target sum, move the right pointer one space to the left
      else if (currentSum > targetSum) {
        right--;
      }
    }
    // Return the triplets array once are no more numbers that enter in the conditional
    return triplets;
  }
}
