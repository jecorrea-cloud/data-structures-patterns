// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that
// i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

function threeNumberSum(array, targetSum) {
    array.sort((a, b) => a-b)
    const triplets

    for (let index = 0; index < array.length - 2; index++) {
        let left = index+1
        let right = array.length - 1
    }
}