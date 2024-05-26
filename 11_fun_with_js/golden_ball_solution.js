function findGoldenBall(balls) {
  // Find the two heaviest balls
  let heaviestBall = null;
  let secondHeaviestBall = null;

  for (let i = 0; i < balls.length; i++) {
    const ball = balls[i];

    if (heaviestBall === null || ball.weight > heaviestBall.weight) {
      if (secondHeaviestBall !== null) {
        secondHeaviestBall = heaviestBall;
      }
      heaviestBall = ball;
    } else if (
      secondHeaviestBall === null ||
      ball.weight > secondHeaviestBall.weight
    ) {
      secondHeaviestBall = ball;
    }
  }

  // Compare the two heaviest balls to find the golden ball
  if (heaviestBall.weight === secondHeaviestBall.weight) {
    return heaviestBall;
  } else {
    return heaviestBall.weight > secondHeaviestBall.weight
      ? heaviestBall
      : secondHeaviestBall;
  }
}

// Example usage
const balls = [
  { name: "A", weight: 10 },
  { name: "B", weight: 20 },
  { name: "C", weight: 30 },
  { name: "D", weight: 20 },
  { name: "E", weight: 15 },
];

console.log(findGoldenBall(balls)); // Output: { name: 'C', weight: 30 }
