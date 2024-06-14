// 91. Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order) in a given array of positive integers.

function array_max_consecutive_sum(nums, k) {
  let result = 0; // Initialize the result variable
  let temp_sum = 0; // Initialize a variable to store the temporary sum

  // Calculate the initial temporary sum for the first k-1 elements
  for (let i = 0; i < k - 1; i++) {
    temp_sum += nums[i];
  }

  // Iterate through the array, updating the temporary sum and result
  for (let i = k - 1; i < nums.length; i++) {
    temp_sum += nums[i];

    // Update the result if the temporary sum is greater
    if (temp_sum > result) {
      result = temp_sum;
    }

    // Subtract the first element of the current k elements from the temporary sum
    temp_sum -= nums[i - k + 1];
  }
  // Return the final result
  return result;
}

// Example usage

console.log(array_max_consecutive_sum([3, 2, 1, 0, 5], 3));
