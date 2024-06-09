// 84. Write a JavaScript program to replace each character in a given string with the next in the English alphabet.
// Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.

function alphabet_char_shift(str) {
  const all_chars = str.split("");
  for (let i = 0; i < all_chars.length; i++) {
    let n = all_chars[i].charCodeAt() - "a".charCodeAt();
    n = (n + 1) % 26;
    all_chars[i] = String.fromCharCode(n + "a".charCodeAt());
  }
  return all_chars.join("");
}

console.log(alphabet_char_shift("abcmnop"));

///////////////////////////////////////

const alpha_char_shift = (str) => {
  const all_chars = str.split("");
  for (let i = 0; i < all_chars.length; i++) {
    let n = all_chars[i].charCodeAt() - "a".charCodeAt();
    n = (n + 1) % 26;
    all_chars[i] = String.fromCharCode(n + "a".charCodeAt());
  }
  return all_chars.join("");
};

console.log(alpha_char_shift("nabin"));

///////////////////////////////////////

const char_shift = (str) => {
  return str
    .split("")
    .map((char) => {
      let n = char.charCodeAt() - "a".charCodeAt();

      n = (n + 1) % 26;
      return String.fromCharCode(n + "a".charCodeAt());
    })
    .join("");
};

console.log(char_shift("naman"));

// let fruits = ["A", "g", "l"];

// fruits.map((fruit) => fruit.charCodeAt());
