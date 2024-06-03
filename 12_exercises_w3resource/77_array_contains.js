// 77. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3.

function array_contains(arr) {
  // return arr.length;
  if (arr.length === 2) {
    return arr.includes(1) || arr.includes(3) ? true : false;
  }
  return false;
}

const myArr = [1, 3];
console.log(array_contains(myArr));
