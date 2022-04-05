// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

// Brute force approach:

function containsDuplicate(array) {
  let minimumSecondIndex = array.length;
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    for (let j = 0; j < array.length; j++) {
      const valueToCompare = array[j];
      if (value === valueToCompare) {
        minimumSecondIndex = Math.min(minimumSecondIndex, j);
      }
    }
  }

  if (minimumSecondIndex === array.length) return -1;

  return array[minimumSecondIndex];
}
