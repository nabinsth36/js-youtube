"use strict"; // treat all JS code as newer version
// alert(3 + 3);

let isLoggedIn = false;
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true / false
// null => standalone value
// undefined =>

// object
let age  = 25;
console.log(typeof age);
console.log(typeof null);
console.log(typeof undefined);

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// Operations
let value = 3;
let negValue = -value;
console.log(negValue);

let str1 = 'Hello';
let str2 = 'nabin';
console.log(str1 + str2);

let num1, num2, num3

num1 = num2 = num3 = 2 + 2;
console.log(num1);
console.log("");

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

// Postfix increment
let x = 3;
const y = x++
console.log(`x is ${x}, y is ${y}`);

let x2 = 3n;
const y2 = x2++;
console.log(`x2 is ${x2}, y2 is ${y2}`);

// Prefix increment
let a = 3;
const b = ++a;
console.log(`a is ${a}, b is ${b}`)



// Stack (Primitive), Heap (Non-primitive)

let myYoutubename = 'hiteshdotcom';
let anothername = myYoutubename;
anothername = 'chaiaurcode';
console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email ="hitesh@google.com"

console.log(userOne.email)
console.log(userTwo.email)