// 42. Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

function number_order(x, y, z) {
  // Check if y is greater than x and z is greater than y
  if (y > x && z > y) {
    return "strict mode";
  }

  // Check if z is greater than y
  else if (z > y) {
    return "soft mode";
  }

  // If none of the conditions are met, return undefined
  else {
    return "Undefined";
  }
}

console.log(number_order(10, 15, 31));
console.log(number_order(24, 22, 31));
console.log(number_order(50, 21, 15));
