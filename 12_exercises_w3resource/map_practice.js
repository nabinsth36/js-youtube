// Double numbers
/* 
function double_number(num) {
  if (num === null || num === undefined) {
    return "enter valid number";
  } else {
    return `double numbers = ${num.map((n) => n * 2)}`;
  }
}

const numbers = [2, 5, 7, 9, 12];

console.log(double_number(numbers));

 */

// Stringify numbers
// function stringItUp(arr) {
//   if (arr === null || arr === undefined) {
//     return "enter valid array";
//   } else {
//     return arr.map((n) => n.toString());
//   }
// }

// const myNums = [24, 54, 78, 95];
// console.log(stringItUp(myNums));

// Capitalize Names
function capitalize(arr) {
  return arr.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  );
}

const myStrs = ["superman", "spiderman", "hulk", "ironman"];

console.log(capitalize(myStrs));
