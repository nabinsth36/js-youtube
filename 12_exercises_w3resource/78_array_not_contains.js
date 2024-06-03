// 78. Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.

function not_contains(arr) {
  if (arr.length === 2) {
    return !(arr.includes(1) || arr.includes(3)) ? true : false;
  }
  return false;
}

const myData = [4, 3];

console.log(not_contains(myData));
