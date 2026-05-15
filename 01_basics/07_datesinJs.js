// Dates in javascript
// dates widely used in booking apps web etc 

let myDate = new Date()

// console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);



//let myCreatedDate = new Date(2023, 0, 23) 
//console.log(myCreatedDate.toDateString())

// month started with 0 in js 

// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // year month date time in hours and minutes 

// let myCreatedDate = new Date("2023-01-14")  // here you have started month as 01

let myCreatedDate = new Date("01-14-2023") // Time by indian format 
// console.log(myCreatedDate.toLocaleString());




////////////////////////////////////////

 let myTimeStamp = Date.now() // Provide date in milliseconds from 1970s and 

//  console.log(myTimeStamp);
//  console.log(myCreatedDate.getTime());

//    console.log(Math.floor(Date.now()/1000)); // Date in seconds 


///////////////////////////////////////////////////////

// let newDate = new Date()
// console.log(newDate);
// // console.log(newDate.getMonth() + 1);
// // console.log(newDate.getDay());


// // used string interpolation means `` backticks
// console.log(`Date is ${newDate.getDay()} and the time ${newDate.getTime()} `)


//////////////////////////////////////////////////////////////////


// toLocaleString is a js method 

// locales → language/country format
// options → customize formatting
// date is an object
// toLocaleString() is a method of that object


// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })
