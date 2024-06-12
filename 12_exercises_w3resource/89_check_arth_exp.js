/* Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.

For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z */

function check_arithmetic_exp(x, y, z) {
  let operators = ["+", "-", "*", "/"];
  for (const operator of operators) {
    const expression = `${x} ${operator} ${y}`;
    if (eval(expression) === z) {
      console.log(`Found a valid expression: ${expression} = ${z}`);
      return true;
    }
  }
  console.log("No valid expression found.");
  return false;
}

console.log(check_arithmetic_exp(10, 15, -5));
