// 74. Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array.

function largest_val(num) {
  const max_val = Math.max(num[0], num[num.length - 1]);

  for (let i = 1; i <= num.length - 1; i++) {
    num[i] = max_val;
  }
  return num;
}

const data = [50, 40, 15, 28, 30];

console.log(largest_val(data));
