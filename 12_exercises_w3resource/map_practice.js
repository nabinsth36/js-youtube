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
/* function capitalize(arr) {
  return arr.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  );
}

const myStrs = ["superman", "spiderman", "hulk", "ironman"];

console.log(capitalize(myStrs));
 */

console.log(`Write a function that takes an array of objects representing people, where each object has a name and age property, and returns a new array where each person's name is capitalized. You can use the map function to accomplish this.
`);

function capitalizeNames(people) {
  // Use the map function to capitalize each person's name
  return people.map((person) => {
    return {
      name: person.name.charAt(0).toUpperCase() + person.name.slice(1),
      age: person.age,
    };
  });
}

function ageQuery(people) {
  return people.filter((person) => {
    person.age > 30;
    {
      return person.name.charAt(0).toUpperCase() + person.name.slice(1);
    }
  });
}
// Test the function
const people = [
  { name: "john", age: 30 },
  { name: "emma", age: 25 },
  { name: "nabin", age: 44 },
  { name: "maiya", age: 39 },
  { name: "nirdesh", age: 8 },
  { name: "naman", age: 13 },
];

const capitalizedNames = capitalizeNames(people);
console.log(capitalizedNames);

const ThirtyAndAbove = ageQuery(people);
console.log(ThirtyAndAbove);
