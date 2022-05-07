// Reverse a string

// Imperative approach: cut off the whitespaces, then loop the string backwards while adding each character to a new empty string.
function reverseString(str) {
  str = str.replace(/\s+/g, " ").trim();
  newStr = "";
  for (let i = str.length - 1; i > -1; --i) {
    newStr += str[i];
  }
  return newStr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("");

  console.log("Expecting: 'olleh'");
  console.log("=>", reverseString("hello"));

  console.log("");

  console.log("Expecting: 'drlow olleh'");
  console.log("=>", reverseString("hello world"));

  console.log("");

  console.log("Expecting: 'secaps on'");
  console.log("=>", reverseString("   no spaces   "));

  console.log("");
  console.log("Expecting: 'elddim eht ni secapsetihw sekiy'");
  console.log("=>", reverseString("yikes      whitespaces in the middle"));
}

module.exports = reverseString;
