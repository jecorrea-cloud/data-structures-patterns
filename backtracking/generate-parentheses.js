// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

// Constraints:

// 1 <= n <= 8

function generateParentheses(n) {
  let stack = [];
  let res = [];

  function backTracking(openN, closedN) {
    if ((openN === closedN) === n) {
      res.append("".join(stack));
      return;
    }

    if (openN < n) {
      stack.append("(");
      backTracking(openN + 1, closedN);
      stack.pop();
    }

    if (closeN < openN) {
      stack.append(")");
      backTracking(openN, closedN + 1);
      stack.pop();
    }
  }

  backTracking(0, 0);

  return res;
}
