// let name = "Nabin Shrestha";

// let new_name = "nabin pradhan";

// this[name] = new_name;
// console.log(name);
// console.log(this[name]);

// console.log("////////////////////////////////");

function user(firstName, lastName) {
  let username = `${firstName} ${lastName}`;
  let obj = {};
  obj[username] = {};
  let arr = ["age", "gender", "occupation"];
  for (let bio of arr) {
    let ask = prompt(`Please enter your ${bio}`);
    obj[username][bio] = ask;
  }
  return obj;
}

console.log(user("Nabin", "Shrestha"));
