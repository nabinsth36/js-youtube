// for

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
}

for (let i = 0; i <=10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <=10; j++) {
        console.log(`Inner loop value ${j} and inner loop ${i}`);
    }
    
}