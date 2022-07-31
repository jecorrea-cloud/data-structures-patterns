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

// Bucket sort approach:

function topKFrequent(nums, k) {
  // Declare the variables
  let map = {};
  let res = [];
  let bucket = Array.from({ length: nums.length + 1 }, () => []); // to create unique arrays

  // storing frequencies for each number in the map hashtable
  for (const i of nums) {
    map[i] = i in map ? 1 + map[i] : 1;
  }

  // Populate the bucket with numbers in frequency
  // as the index of the bucket
  for (const key in map) {
    bucket[map[key]].push(key);
  }

  // Finally add the most frequent elements to the result array, starting from the end
  for (let index = bucket.length - 1; index >= 0; index--) {
    if (bucket[index].length > 0) {
      bucket[i].forEach((elem) => res.push(elem));
      if (k === res.length) {
        return res;
      }
    }
  }
}

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
