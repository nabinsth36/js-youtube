// 80. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.

function swap_integers(arr) {
  if (arr.length >= 1) {
    // let x = arr[0];
    // arr[0] = arr[arr.length - 1];
    // arr[arr.length - 1] = x;

    //////////////////////////

    // Destructuring assignment to swap values without using a temporary variable

    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  }
  return arr;
}

const dataset = [20, 45, 9, 83];
console.log(swap_integers(dataset));
