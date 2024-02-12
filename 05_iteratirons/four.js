/* const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

 for (const key in myObject) {
    // console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
} 
 */

/* 
const programming = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in programming) {
    console.log(key);
    console.log(programming[key]);
}
 */



const map = new Map()
map.set('IN', "India")
map.set('NP', "Nepal")
map.set('Fr', 'France')
map.set('USA', 'United States of America')
map.set('NP', "Nepal")

for (const key in map) {
    console.log(key);
} 
