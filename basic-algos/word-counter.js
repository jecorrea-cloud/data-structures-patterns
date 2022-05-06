// Word counter

function wordCounter(str) {}

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
    wordCounter("   yikes, there are many whitespaces in this case    ")
  );
}

module.exports = wordCounter;
