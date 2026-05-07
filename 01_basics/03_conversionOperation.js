

let score = "Chhotu"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "Chhotu"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Chhotu" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Chhotu"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// prefix and postfix increment and decrement operator
// mdn https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion



// postfix increment and decrement operator
let x = 3;
const y = x++;
// x is 4; y is 3
console.log(x, y);


// prefix increment and decrement operator
let x1 = 3;
const y1 = ++x1;
// x1 is 4; y1 is 4

let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n

console.log(x1, y1);
console.log(x2, y2);
