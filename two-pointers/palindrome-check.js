// Write a simple function (less than 160 characters) that returns a boolean indicating whether or not an input
// non-empty string is a palindrome.

// A Palindrome is defined as a string that's written read the same forward and backward.
// Note that single-character strings are palindromes.

// Sample input: 'level'

// function palindrome(string) {
//   let ans;

//   for (let index = 0; index < string.length; index++) {
//     string[index] !== string[string.length - 1 - index]
//       ? (ans = false)
//       : (ans = true);
//   }

//   return ans;
// }

// function palindrome(string) {
//   for (let i = 0; i < string.length; i++) {
//     let ans = string[i] !== string[string.length - 1 - i] ? false : true;
//     return ans;
//   }
// }

// function isPalindrome(string, i = 0) {
//     // O(n) time | O(n) space
//     const j = string.length - 1 - i;
//     return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1);
//   }
