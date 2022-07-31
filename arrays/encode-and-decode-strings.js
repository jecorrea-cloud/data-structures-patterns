// Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

// Please implement encode and decode

// Example1

// Input: ["lint","code","love","you"]
// Output: ["lint","code","love","you"]
// Explanation:
// One possible encode method is: "lint:;code:;love:;you"
// Example2

// Input: ["we", "say", ":", "yes"]
// Output: ["we", "say", ":", "yes"]
// Explanation:
// One possible encode method is: "we:;say:;:::;yes"

function encode(strs) {
  let res = "";
  for (const s of strs) {
    res += s.length + "#" + s;
  }
  return res;
}

function decode(s) {
  let res = [];
  let i = 0;

  while (i < s.length) {
    j = i;
    while (s[j] !== "#") {
      ++j;
    }
    const len = Number(s.slice(i, j));
    res.push(s.slice(++j, j + len));
    i = j + len;
  }
}
