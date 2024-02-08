/* let myArray = [];
myArray.push("apple", "banana", "orange","grape", "mango");
console.log(myArray[1]);
myArray[2] = "kiwi";
console.log(myArray);

function printFruits(fruit){
    
    if (fruit.length === 0) return "Array is Empty";

    for (let i=0; i<fruit.length; i++) {
    console.log(fruit[i]);
}   
console.log(`Length of Array: ${fruit.length}`)
}


printFruits(myArray)

function lastElement(fruit){
    if (fruit.length === 0) return "Array is empty";
    let removed = fruit.pop()
    console.log(`Removed Fruit: ${removed}`);
    console.log(`Remaining Fruits: ${fruit}`);
}

lastElement(myArray);

let moreFruits = ['pineapple', 'watermelon'];
let allFruits = moreFruits.concat(myArray);
console.log(allFruits);
allFruits.sort((a, b) => a.localeCompare(b))
console.log(allFruits);

allFruits.sort()
console.log(allFruits); */

// Number sorting

const number = [3, 8, 6, 4, 9, 12];

let sorted = number.sort((a, b) => a-b)
console.log(sorted);

sorted[0] = 10;
console.log(number[0]);
 
// const sortedValues = number.toSorted((a, b) => a - b);
// console.log(sortedValues); 

// Empty number
sorted = []
console.log(sorted);