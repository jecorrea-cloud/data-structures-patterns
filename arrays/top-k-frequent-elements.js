// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

// 1 <= nums.length <= 105
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

function topKFrequent(nums, k) {}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1,2]");
  console.log("=>", topKFrequent([1, 1, 1, 2, 2, 3], "i"));

  console.log("");

  console.log("Expecting: 2");
  console.log("=>", topKFrequent("hello world", "heyoo world"));

  console.log("");

  console.log("Expecting: 3");
  console.log("=>", topKFrequent("dokksa", "ducksw"));
}

module.exports = topKFrequent;
