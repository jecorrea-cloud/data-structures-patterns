// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

function firstUniqChar(s) {
  // O(n) time | O(1) space where n is the length of the input string
  // The constant space is because the input string only has lowercase
  // English-alphabet letters; thus, our hash table will never have more
  // than 26 character frequencies
  const characterFrequencies = {};
  for (const character of s) {
    if (!(character in characterFrequencies)) {
      characterFrequencies[characer] = 0;
    }
    characterFrequencies[character]++;
  }

  for (let index = 0; index < s.length; index++) {
    const character = s[index];
    if (characterFrequencies[character] === 1) {
      return index;
    }
  }

  return -1;
}
