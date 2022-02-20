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

// Two pointers approach: Even though we are not dealing with a sorted array, in this case we can treat the
// palindrome as one. Therefore we can set two pointers at the beginning and at the end of the input string.
// Then, we'll iterate the string and compare if the two values with the indexes match.
// If they do not, immediatly return false. If they do match, shift each pointer one space to the right and to
// the left and compare the new values they hold. If they happen to be at the same index we know we reached the end.
// From this point exit the iteration and return true.

// Time complexity will be linear because the input string will be traversed only once based on its length.
// Because the function does not store anything in memory and just returns a boolean, space complexity will be constant.

function isPalindrome(string) {
  // O(n) time - where n is the length of the input string| O(1) space
  let leftIdx = 0;
  let rightIdx = string.length - 1;

  // Now iterate the string
  while (leftIdx < rightIdx) {
    // Base case if they are false
    if (string[leftIdx] !== string[rightIdx]) return false;
    // Otherwise move the indexes to the right and to the left one space
    // and compare again until the condition for the iteration is no longer true.
    leftIdx++;
    rightIdx--;
  }
  return true;
}
