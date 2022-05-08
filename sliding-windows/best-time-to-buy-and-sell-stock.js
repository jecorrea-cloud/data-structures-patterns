// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:

// 1 <= prices.length <= 10^5
// 0 <= prices[i] <= 10^4

// Sliding window approach: We first set two pointers to the indexes of the first two values in the input array and a returning profit variable to zero.
// Then we make sure to check the value on the left (day we bought) is always less than the value on the right (day we sell).
// If not we set the left to hold the value of the right, and move the right one space.
// Otherwise check if the substraction of the values is greater than the returning maximum profit value and either set it to the new value or keep it.
// We thhen keep repeating this until we reach the end of the array.
// Time complexity will be linear because the array is being traversed only once.
// Space complexity will be constant given nothing is being saved into memory.
function maxProfit(prices) {
  // O(n) time - where n is the length of the input array | O(1) space
  let maxPro = 0;
  let left = 0;
  let right = 1;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left];
      maxPro = Math.max(maxPro, profit);
    } else {
      left = right;
    }
    right++;
  }
  return maxPro;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", maxProfit([7, 6, 4, 3, 1]));

  console.log("");

  console.log("Expecting: 5");
  console.log("=>", maxProfit([7, 1, 5, 3, 6, 4]));
}

module.exports = maxProfit;
