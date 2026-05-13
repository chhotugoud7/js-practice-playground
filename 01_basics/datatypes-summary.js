
// data types in javascript 
// 2 categories : Primitive and Reference (Non primitive)
//  Primitive data types are stored in stack memory and they are immutable (cannot be changed)
//  Reference data types are stored in heap memory and they are mutable (can be changed)
//  Primitive data types are copied by value and Reference data types are copied by reference
//  Primitive data types are faster than Reference data types because they are stored in stack memory and they are immutable
//  Primitive data types are compared by value and Reference data types are compared by reference
//  Primitive data types are passed by value and Reference data types are passed by reference

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100 // number data type
const scoreValue = 100.3 // number data type

const isLoggedIn = false // boolean data type
const outsideTemp = null // null data type
let userEmail; // undefined data type

const id = Symbol('123') // Symbol is a unique and immutable data type that can be used as an identifier for object properties. It is not a string and it is not a number. It is a primitive data type. It is created using the Symbol() function. It can be used to create unique property keys for objects. It can also be used to create unique values for variables. It is not enumerable and it is not iterable. It is not convertible to string or number. It is not equal to any other value, including itself. It is often used to create private properties for objects.
const anotherId = Symbol('123') 

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n 
// // BigInt is a new data type in JavaScript that can represent integers with arbitrary precision. It is created by appending 'n' to the end of an integer literal or by calling the BigInt() function. It can be used to represent numbers larger than 2^53 - 1, which is the maximum safe integer in JavaScript. It can also be used to represent negative integers and zero. It is a primitive data type. It is immutable and it is compared by value. It is not convertible to string or number. It is not equal to any other value, including itself. It is often used in cryptography, scientific computing, and other applications that require large integers.



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // array


let myObj = {
    name: "hitesh",
    age: 22,
} // object is in {} and it has key value pairs
// and it is stored in variable myObj

// function declaration

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId); //it is to check the data type of a variable


// https://262.ecma-international.org/5.1/#sec-11.4.3



/*


-------------------------------------------------

--stack and heap

stack -- primitive data types --> copy pasted -> actual value does not chagned in the end.
heap -- non primitive data types --> reference passed -> actual value changed in the end.



*/