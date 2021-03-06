// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

// Constraints:

// 1 <= s1.length, s2.length <= 10^4
// s1 and s2 consist of lowercase English letters.

function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;
  let s1Count = new Array(26).fill(0);
  let s2Count = new Array(26).fill(0);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", checkInclusion("ab", "eidbaooo"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", checkInclusion("ab", "eidboaoo"));
}

module.exports = checkInclusion;
