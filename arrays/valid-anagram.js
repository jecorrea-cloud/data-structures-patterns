// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

// Brute force approach: Iterate it
function isAnagram(s, t) {
  s = s
    .replace(/[^A-Za-z0-9]/g, "")
    .split("")
    .sort()
    .join("");
  t = t
    .replace(/[^A-Za-z0-9]/g, "")
    .split("")
    .sort()
    .join("");
  for (let index = 0; index < s.length; index++) {
    const firstValue = s[index];
    const valueToCompare = t[index];
    if (firstValue !== valueToCompare) {
      return false;
    }
  }
  return true;
}
