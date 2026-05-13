

const name = "Chhotu"
const repoCount = 11

// console.log(name + repoCount + " Value");

// for String Concatenation. we use backticks(``) and we called it string interpolation....

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



const gameName = new String('chhotu-goud-com')  //decleration of an string this way we get an object that have key -- value pair of string
// on this string due to key value pair we can perform all these methods on it 


console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));



const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Chhotu    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Chhotu.com/Chhotu%20Goud"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-')); //gives an array of splited words

