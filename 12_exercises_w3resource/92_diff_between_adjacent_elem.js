// 92. Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.

function diff_between_adjacent_elem(nums) {
  if (nums.length < 2) {
    return 0;
  }
  let max = -1; // Initialize a variable to store the maximum difference
  let temp; // Temporary variable to calculate the difference

  // Iterate through the array to find the maximum difference
  for (let i = 0; i < nums.length - 1; i++) {
    temp = Math.abs(nums[i] - nums[i + 1]); // Calculate the absolute difference
    max = Math.max(max, temp); // Update the maximum difference
  }
  return max; // Return the final maximum difference
}

// Example usage

console.log(diff_between_adjacent_elem([2, 8, 15, 12]));
