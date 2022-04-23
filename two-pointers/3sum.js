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
// We then proceed to declare two pointers for the second and last item in the array
// Because we are iterating the array twice, the time complexity is O(n^2)
// We are saving an array in memory to return, so at worst case space complexity will be O(n)
// Because there is a chance the returning array contains the same amount
