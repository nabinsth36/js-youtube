// Dates
// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.toUTCString());

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
// let myCreatedDate = new Date('01-14-2023');
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp =  Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
// console.log(newDate.getYear());

// newDate.toLocaleString('default', {
//     weekday: "Long",
// })
// console.log(newDate);

const date = new Date(Date.UTC(2012, 11, 20, 19, 5, 7));
// Request a weekday along with a long date
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};
console.log(date.toLocaleString("de-DE", options));

// An application may want to use UTC and make that visible
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(date.toLocaleString("en-US", options));

// Sometimes even the US needs 24-hour time
console.log(date.toLocaleString("en-US", {hour12: false}));