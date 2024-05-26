// const name = "hitesh";
// const repoCount = 50;
// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);
// const gameName = new String("hitesh-hc-com");
// console.log(gameName);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("t"));

// const newString = gameName.substring(0, 4);
// console.log(newString);
// const anotherString = gameName.slice(-1, 4);
// console.log(anotherString);
// const anotherString2 = gameName.slice(-11, 4);
// console.log(anotherString2);

// const newStringOne = "   hitesh   ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://hitesh.com/hitesh%20choudhary";
// console.log(url.replace("%20", "-"));

// console.log(url.includes("com"));
// console.log(gameName.split("-"));

///////////

// const contentString = "Hello, world";
// const elem = document.createElement("a");
// elem.innerText = contentString;
// document.body.appendChild(elem);

/////////////

// const name = "Nabin Shrestha";
// const nameContains = name.split("");
// console.log(nameContains);
// console.log(nameContains.at(0));
// let index = 1;
// console.log(`An index of ${index} return ${nameContains.at(index)}`);
//////////////////

// const cart = ["apple", "banana", "pear"];

// function returnLast(arr) {
//   return arr.at(-1);
// }

// const item1 = returnLast(cart);
// console.log(item1);

// cart.push("orange");
// console.log(cart);
// console.log(returnLast(cart));

////////////////////

// const colors = ["red", "green", "blue"];

// // Using length property
// const lengthWay = colors[colors.length - 2];
// console.log(lengthWay);

// // Using slice() method
// const sliceWay = colors.slice(-2, -1);
// console.log(sliceWay[0]);

// // Using at() method
// const atWay = colors.at(-2);
// console.log(atWay);

////////////////////

// Calling at() on non-array objects

const arrayLike = {
  length: 2,
  0: "a",
  1: "b",
  2: "c",
};

console.log(Array.prototype.at.call(arrayLike, 0));
console.log(Array.prototype.at.call(arrayLike, 2));
