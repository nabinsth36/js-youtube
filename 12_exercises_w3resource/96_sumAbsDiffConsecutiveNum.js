// 96. Write a JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers.

const sumAbsDiffConsecutiveNum = (arr) => {
  let result = 0; // Initialize the result variable to store the sum

  // Iterate through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    result += Math.abs(arr[i] - arr[i - 1]); // Add the absolute difference to the result
  }
  return result; // Return the final sum
};

// Example apply
console.log(sumAbsDiffConsecutiveNum([10, 2, 4, 9]));
