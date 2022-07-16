// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

function longestPalindrome(s) {
  let res = "";
  let resLen = 0;

  for (const i of s) {
    // Odd length
    let l = i;
    let r = i;

    while ((l >= 0) & (r < s.length) & (l[i] === r[i])) {
      if (r - l + 1 > resLen) {
        res = s.substring(l, r + 1);
        resLen = r - l + 1;
      }
      l -= 1;
      r += 1;
    }
    // Even length
    l = i;
    r = i + 1;
    while ((l >= 0) & (r < s.length) & (l[i] === r[i])) {
      if (r - l + 1 > resLen) {
        res = s.substring(l, r + 1);
        resLen = r - l + 1;
      }
      l -= 1;
      r += 1;
    }
  }
  return res;
}
