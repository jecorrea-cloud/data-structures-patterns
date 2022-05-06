// Reverse a string

function reverseString(str) {
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

  console.log("Expecting: 'drlow olleh'");
  console.log("=>", reverseString("hello world"));
}

module.exports = reverseString;
