// Given two strings needle and haystack, return the i of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's iOf().

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Constraints:

// 1 <= haystack.length, needle.length <= 10^4
// haystack and needle consist of only lowercase English characters.

function strStr(haystack, needle) {
  if (needle === "") return 0;

  for (let i = 0; i < haystack.length + 1 - needle.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
}
