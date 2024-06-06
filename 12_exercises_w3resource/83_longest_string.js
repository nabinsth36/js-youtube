// 83. Write a JavaScript program to find the longest string from a given array of strings.
// function longest_string(strArr) {
//   let max = strArr[0].length;
//   strArr.map((v) => (max = Math.max(max, v.length)));
//   result = strArr.filter((v) => v.length == max);
//   return result;
// }

const largest_string = (strArr) => {
  let max = strArr[0].length;
  strArr.map((v) => (max = Math.max(max, v.length)));
  result = strArr.filter((v) => v.length == max);
  return result;
};

const data = ["a", "aa", "aaa", "aaaa"];

console.log("large string = ", largest_string(data));

const small_str = (str) => {
  let min = str[0].length;
  str.map((v) => (min = Math.min(min, v.length)));
  return str.filter((v) => v.length == min);
};

const myStr = ["gopal", "srawan", "bk"];

console.log("small string = ", small_str(myStr));
