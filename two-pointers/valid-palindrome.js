// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

// Two pointers approach: Even though we are not dealing with a sorted array, in this case we can treat the
// palindrome as one. First lowercase the string and remove spaces and special characters. Then we can set
//two pointers at the beginning and at the end of the input string.
// Next, we'll iterate the string and compare if the two values with the indexes match:
// If they do not, immediatly return false. If they do match, shift each pointer one space to the right and to
// the left and compare the new values they hold. If they happen to be at the same index we know we reached the end.
// From this point exit the iteration and return true.

// Time complexity will be linear because the input string will be traversed only once based on its length (O(n)).
// Because the function does not store anything in memory and just returns a boolean, space complexity will be constant O(1).

function isPalindrome(string) {
  // O(n) time - where n is the length of the input string| O(1) space
  string = string.toLowerCase();
  string = string.replace(/[^A-Za-z0-9]/g, "");

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
