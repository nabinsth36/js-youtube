// 90. Write a JavaScript program to find the kth greatest element in a given array of integers.

function greatestElement(num) {
  let arr = num.sort((a, b) => b - a);
  return `Greatest element in a given array of integers = ${arr[0]}`;
}

let num = [5, 2, 8, 12, 3];
console.log(greatestElement(num));
