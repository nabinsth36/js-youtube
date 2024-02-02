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
