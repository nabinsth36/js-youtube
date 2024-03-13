// ES6
/* 
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}A1B2C3`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("Nabin", "chai@gmail.com", "123");

console.log(chai.encryptPassword());
console.log(chai.changeUsername());
 */
// Behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}A1B2C3`;
};

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const newUser = new User("Nabin", "nabin@gmail.com", "12345");

console.log(newUser.encryptPassword());

console.log(newUser.changeUsername());
