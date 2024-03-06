// let myName = "hitesh     ";
// let mychannel = "chai     ";
// console.log(myName.trueLength);

// console.log(myName.trim().length);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all object`);
};

heroPower.hitesh();
