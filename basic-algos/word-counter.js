// Word counter

function wordCounter(str) {
  // Cut off the whitespaces
  str = str.replace(/\s+/g, " ").trim();
  // Use the split method to turn the string into array w/o whitespaces and return the length
  return str.split(" ").length;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log("=>", wordCounter("hi"));

  console.log("");

  console.log("Expecting: 2");
  console.log("=>", wordCounter("hello world"));

  console.log("");

  console.log("Expecting: 8");
  console.log(
    "=>",
    wordCounter("   woah, there are many whitespaces in this case    ")
  );

  console.log("");
  console.log("Expecting: 6");
  console.log(
    "=>",
    wordCounter("   yikes, now        whitespaces          in the middle    ")
  );
}

module.exports = wordCounter;
