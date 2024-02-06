// singleton
// Object.create

// object literals
const mySym = Symbol("key1");
// console.log(typeof mySym);

const JsUser = {
  name: "Hitesh",
  "full name": "Hitesh Chaudhary",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
console.log(typeof JsUser[mySym]);

JsUser.email = "nabinsth@gmail.com";
console.log(JsUser);
// Object.freeze(JsUser);
JsUser.email = "nabinsth@yahoo.com";
console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS User");
};
// console.log(JsUser.greeting);

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};
JsUser.greeting();
JsUser.greetingTwo();
