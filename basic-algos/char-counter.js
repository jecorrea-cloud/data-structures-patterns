// Character counter

// function charCounter(str, ch) {
//   let n = 0;
//   for (let index = 0; index < str.length; index++) {
//     const letter = str[index];
//     if (letter === ch) {
//       n++;
//     }
//   }

//   return n;
// }

function charCounter(str, ch) {
  const arrStr = [...str];
  let count = 0;
  arrStr.forEach((element) => {
    if (element === ch) count++;
  });
  return count;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log("=>", charCounter("hi", "i"));

  console.log("");

  console.log("Expecting: 2");
  console.log("=>", charCounter("hello world", "o"));

  console.log("");

  console.log("Expecting: 2");
  console.log(
    "=>",
    charCounter("   woah, there are many whitespaces in this case    ", "w")
  );

  console.log("");

  console.log("Expecting: 5");
  console.log(
    "=>",
    charCounter(
      "   yikes, now        whitespaces          in the middle    ",
      "e"
    )
  );
}

module.exports = charCounter;
