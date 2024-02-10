/* // if
const isUserLoggedIn = true
const temperature = 51

if (temperature < 50){
console.log('less than 50');
}
else {
console.log('temperature is greater than 50');
}
console.log('execute'); */
// <, >, <=, >=, ==, !=

/* const score = 200;

if (score > 100) {
    const  power = 'fly'
    console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`); */

/* const balance = 850
// if (balance > 500) console.log('test');
if(balance<500) {
    console.log('less than 500');
} else if (balance < 750) {
    console.log('less than 750')
} else if (balance < 900) {
    console.log('less than 900')
} else {
    console.log('less than 1200');
} */
/* 
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 2) {
    console.log('Allow to buy course');
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log('User logged in');
}

 */
const month = 44;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log('August');
        break;
    case 9:
        console.log('September');
        break;
    case 10:
        console.log('October');
        break;
    case 11:
        console.log('November');
        break;
    case 12:
        console.log('December');
        break;

    default:
        console.log('Enter the correct month');
        break;
}