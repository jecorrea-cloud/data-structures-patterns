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

// Brute force approach: Assuming the input strings are all lowercase, we can use the `.split("")` built in method to convert each input string
// into an array, then sort them alphabetically using `.sort()`, turn them into string again using `.join()` and then return the comparison
// whether or not both strings are equal.
// Time complexity will be O(nlogn) due to the use of sorting.
// Space complexity will be O(1) given nothing is being saved into memory.
function isAnagram(s, t) {
  // O(nlogn) time - where n is the length of the string | O(1) space
  return s.split("").sort().join("") === t.split("").sort().join("");
}
