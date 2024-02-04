function findMaxMin(arr){
    if (arr.length === 0) return "Array is Empty."

    let max = arr[0];
    let min = arr[0];

    for(let i = 1; i<arr.length; i++){
        if (arr[i] > max) {
            max = arr[i]
        }
        if(arr[i] < min) {
            min = arr[i]
         }
    }
    return {max, min};
}

let numbers = [35, 28, 39, 40, 43, 36, 34];
let result = findMaxMin(numbers);

console.log(`Numbers: ${numbers}`);
console.log(`Maximum: ${result.max}`);
console.log(`Minimum: ${result.min}`);