// Hamming distance

// Imperative approach: Check if the lengths of the strings do not match. Then loop and use a counter to keep track of the non-matching characters.

function hammingMeter(s, t) {
  // Base case
  if (s.length !== t.length) return -1;

  let counter = 0;
  for (let index = 0; index < s.length; index++) {
    if (s[index] !== t[index]) counter++;
  }
  return counter;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: -1");
  console.log("=>", hammingMeter("hi", "i"));

  console.log("");

  console.log("Expecting: 2");
  console.log("=>", hammingMeter("hello world", "heyoo world"));

  console.log("");

  console.log("Expecting: 3");
  console.log("=>", hammingMeter("dokksa", "ducksw"));
}

module.exports = hammingMeter;
