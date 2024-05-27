const arr = [
  { id: 1, weight: 100 },
  { id: 2, weight: 100 },
  { id: 3, weight: 100 },
  { id: 4, weight: 100 },
  { id: 5, weight: 100 },
  { id: 6, weight: 100 },
  { id: 7, weight: 98 },
  { id: 8, weight: 100 },
];
// console.log(arr[6]);

let i = arr[0].weight;

for (let j = 1; i <= 7; j++) {
  if (arr[j].weight < i) {
    console.log(`The small ball is ${arr[j.weight]}`);
  } else {
    console.log(i);
  }
}

/* 
function taraajo(ball1, ball2) {
  if (ball1 < ball2) {
    return ball1;
  } else {
    return ball2;
  }
} */

/* function taraajo() {
  let sum1 = 0;
  let i = 0;
  for (i = 0; i <= 3; i++) {
    sum1 = sum1 + arr[i].weight;
  }
  let groupOneAvgWt = sum1 / i.length;

  let sum2 = 0;
  let j = 4;
  for (j = 4; j <= 7; j++) {
    sum2 = sum2 + arr[j].weight;
  }
  let groupTwoAvgWt = sum2 / j.length;

  if (groupOneAvgWt > groupTwoAvgWt) {
    let sum3 = 0;
    for (let i = 0; i < 2; i++) {
      sum3 = sum3 + arr[i].weight;
    }
    let sum4 = 0;
    for (let j = 2; j < 3; j++) {
      sum4 = sum4 + arr[j].weight;
    }
    if (sum3 > sum4) {
      console.log(sum3);
    } else {
      console.log(sum4);
    }
  } else {
  }
}
 */
