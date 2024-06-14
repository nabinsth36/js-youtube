// 93. Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.

function maxDiffPossiblePairs(arr) {
  let maxDiff = 0; // Initialize the maximum difference variable

  // Iterate through the array to calculate the differences between elements
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j !== i && j < arr.length; j++) {
      const diff = Math.abs(arr[i] - arr[j]); // Calculate the absolute difference
      maxDiff = Math.max(maxDiff, diff); // Update the maximum difference
    }
  }
  return maxDiff; // Return the final maximum difference
}

// Example usage
console.log(maxDiffPossiblePairs([6, 9, 8, 4]));
console.log(maxDiffPossiblePairs([22, 29, 30, 12, 19]));
