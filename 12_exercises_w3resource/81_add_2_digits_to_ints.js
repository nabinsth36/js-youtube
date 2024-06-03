// 81. Write a JavaScript program to add two digits to a given positive integer of length two.

function add2digits(int) {
  //   const absInt = Math.abs(int);

  //   const firstDigit = absInt % 10;
  //   const secondDigit = (absInt - firstDigit) / 10;
  //   return firstDigit + secondDigit;

  /////////////////////////////////

  return (int % 10) + Math.floor(int / 10);
}

const myNum = 88;

console.log(add2digits(myNum));
