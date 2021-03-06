// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

// -231 <= x <= 231 - 1

// Follow up: Could you solve it without converting the integer to a string?

// String approach:

// function isPalindrome(x) {
//   if (x < 0) {
//     return false;
//   }
//   x = x.toString();
//   let left = 0;
//   let right = x.length - 1;
//   while (left < right) {
//     if (x[left] !== x[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }

// Approach without a string:

function isPalindrome(x) {
  if (x < 0) {
    return false;
  }
  let div = 1;
  while (x >= 10 * div) {
    div *= 10;
  }

  while (x) {
    let left = Math.floor(x / div);
    let right = x % 10;

    if (left !== right) {
      return false;
    }
    x = Math.floor((x % div) / 10);
    div = div / 100;
  }
  return true;
}
