// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

// Example 1:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
// Example 2:

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]
// Example 3:

// Input: candidates = [2], target = 1
// Output: []

// Constraints:

// 1 <= candidates.length <= 30
// 1 <= candidates[i] <= 200
// All elements of candidates are distinct.
// 1 <= target <= 500

// Backtracking approach:

function combinationSum(candidates, target) {
  candidates.sort((a, b) => a - b);
  const combos = [];
  const combo = [];
  const set = new Set(candidates);
  dfs(target);
  return combos;

  function dfs(target, start = 0) {
    if (set.has(target)) {
      combo.push(target);
      combos.push(combo.slice());
      combo.pop();
    }
    const mid = Math.floor(target / 2);
    for (
      let index = start;
      index < candidates.length && candidates[i] <= mid;
      ++index
    ) {
      const candidate = candidates[index];
      combo.push(candidate);
      dfs(target - candidate, 1);
      combo.pop();
    }
  }
}
