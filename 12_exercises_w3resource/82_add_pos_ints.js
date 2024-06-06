// 82. Write a JavaScript program to add two positive integers without carrying.

function add_without_carry(n1, n2) {
  let result = 0;
  let x = 1;

  while (n1 > 0 && n2 > 0) {
    result += x * ((n1 + n2) % 10);
    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);

    x *= 10;
  }
  return result;
}

console.log(add_without_carry(422, 900));
