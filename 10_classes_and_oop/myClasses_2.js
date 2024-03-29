// ES6
/*
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@gmail.com", "123");

console.log(chai.encryptPassword());

console.log(chai.changeUsername());
*/

// behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPass = function () {
  return `${this.password}A1B2C3`;
};

const Firstuser = new User("nabin", "nabin@gmail.com", "123");

console.log(Firstuser.encryptPass());
