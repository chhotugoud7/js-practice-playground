// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1); //convertion happens here

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// null is only equal to undefined and not equal to anything else
// null == undefined => true
// null === undefined => false
// null > 0 => false
// null < 0 => false
// null >= 0 => true because in convertion null becomes 0 and 0 >= 0 is true

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===
// strict equality operator
// it does not do type conversion
// it checks both value and type

// ==
// it does type conversion
// it checks only value
console.log("2" === 2);
