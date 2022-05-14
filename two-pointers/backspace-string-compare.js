// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

// Constraints:

// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.

// Follow up: Can you solve it in O(n) time and O(1) space?

function backSpaceCompare(s, t) {}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", backSpaceCompare("ab#c", "ad#c"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", backSpaceCompare("ab##", "c#d#"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", backSpaceCompare("a#c", "b"));

  console.log("");
  console.log("Expecting: 6");
  console.log(
    "=>",
    backSpaceCompare(
      "   yikes, now        whitespaces          in the middle    "
    )
  );
}

module.exports = wordCounter;
