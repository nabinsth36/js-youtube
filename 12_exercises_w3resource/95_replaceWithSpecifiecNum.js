// 95. Write a JavaScript program to replace all numbers with a specified number in an array of integers.

// Function to replace all occurences of a specified value in am array
const replaceWithSpecifiedNum = (arr, oldValue, newValue) => {
  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // ChecoldValue inewValue the current element is equal to the old value
    if (arr[i] === oldValue) {
      arr[i] = newValue; // Replace with the new value
    }
  }

  return arr;
};

// Check example
console.log(replaceWithSpecifiedNum([3, 1, 14, 9, 12, 3, 2], 3, 5));
