// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that
// i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Two Pointers Approach: We firstly assume the array is unorganized and begin by sorting it
//

function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  const triplets = [];

  for (let index = 0; index < array.length - 2; index++) {
    let left = index + 1;
    let right = array.length - 1;
    // Now iterate the array
    while (left < right) {
      // Variable that hold the sum of the two pointers values and the current value that is being looped
      const currentSum = array[index] + array[left] + array[right];
      // Conditional to check if the sum matches the target sum
      if (currentSum === targetSum) {
        triplets.push([array[index], array[left], array[right]]);
      }
      // If currentSum is less than sum, move the left pointer to the right
      else if (currentSum < targetSum) {
        left++;
      }
      // If currentSum is less than sum, move the left pointer to the left
      else if (currentSum > targetSum) {
        right--;
      }
    }
    // Return the triplets once are no more numbers that enter in the conditional
    return triplets;
  }
}
