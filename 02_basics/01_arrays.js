// array

const myArray = [1, 2, 3, 4, 5, 'nabin']
// const myHeroes = ["superman", 'spiderman'];

// const myArray2 = new Array(1,2,3,4)

// console.log(myArray[1]);
// console.log(myHeroes);
// console.log(myArray2[2]);

// Array methods
// myArray.push(6);
// myArray.push(7)
// myArray.pop();

// myArray.unshift(10)
// myArray.shift()

// console.log(myArray.includes(40));
// myArray.pop();
// console.log(myArray);
// console.log(myArray.indexOf('nabin'));

// const newArr = myArray.join()
// console.log(myArray);
// console.log(typeof newArr, newArr);
// console.log(typeof myArray[4]);

// slice,splice
console.log("A ", myArray);

const myn1 = myArray.slice(1, 3)

console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1,3) 
console.log("C ", myArray);
console.log(myn2);