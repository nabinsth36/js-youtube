function add(arr){
    if (arr.length === 0) return "Array is empty."

    let sum = 0;
    for (let i = 0; i<arr.legnth; i++){
        sum+=arr.length[i]
    }
    return sum;
}

let numbers = [5, 2, 3, 9]
console.log(add(numbers));


// Creating an array of strings

let myArray = ['apple', 'banana', 'orange', 'grape'];

// Accessing elements of the array using indices

console.log("Elementa at indesx 0:", myArray[0]);
console.log["Elements at index 2:", myArray[2]];

// Modifying elements of the array
myArray[0] = 'kiwi';
console.log('Modified array:', myArray);

// Adding elements to the array
myArray.push("pineapple");
console.log("Array after adding pineapple", myArray);

// Removing elements from the array
let removedElement = myArray.pop();
console.log("Array after removing elements:", myArray);
console.log("Removed element:", removedElement);

// Length of the array
console.log("Length of the array:", myArray.length);