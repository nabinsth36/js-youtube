// 94. Write a JavaScript program to find the number appearing most frequently in a given array of integers.

const numApperMostFrequently = (nums) => {
  let ctr = []; // Array to store the count of each element
  let maxAppear = 0; // Variable to store the index with the highest count

  // Initialize the count array with zeros for each possible element
  for (let i = 0; i < nums.length; i++) {
    ctr.push(0);
  }

  // Iterate through the input array to count occurrences of each element
  for (let i = 0; i < nums.length; i++) {
    ctr[nums[i] - 1]++; // Increment the count for the corresponding element

    if (ctr[nums[i] - 1] > ctr[maxAppear]) {
      maxAppear = nums[i] - 1; // Update the index with the highest count
    }
  }
  return maxAppear + 1; // Return the mode (element with the highest count)
};

// Example usage
console.log(numApperMostFrequently([8, 5, 8, 11, 5, 9, 8, 8]));
