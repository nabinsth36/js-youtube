// 79. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.
function twice_array(arr) {
  if ((arr[0] === 30 && arr[1] === 30) || (arr[0] === 40 && arr[1] === 40)) {
    return true;
  }
  return false;
}

const dataSet1 = [30, 30];
const dataSet2 = [30, 40];
const dataSet3 = [40, 40];
const dataSet4 = [40, 20];
const dataSet5 = [25, 25];

console.log(twice_array(dataSet1));
console.log(twice_array(dataSet2));
console.log(twice_array(dataSet3));
console.log(twice_array(dataSet4));
console.log(twice_array(dataSet5));
