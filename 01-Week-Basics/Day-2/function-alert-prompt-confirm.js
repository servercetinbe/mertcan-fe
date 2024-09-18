// function square(number) {
//     return number * number;
// }   
// let a = square(5);  
// console.log(a)

// function addSquares(a, b) {
//     function square(x) {
//         return x * x;
//     }
//     return square(a) + square(b);
// }
// let result = addSquares(8, 6);
// console.log(result)

// Function Declaration
// function sum(a, b) {
//     var c = a + b;
//     return c;
// }
// console.log(sum(10, 20))


// Function Expression
// const sum = function(a = 0, b = 0) {
  
//     var c = a + b;
//     return c;
// }
// console.log(sum(10, 20));
// console.log(sum(10)) // Returns NaN


// Windows Object
let val;
var a = 10; 

// ALERT
// alert("Hello")
// PROMPT
// var c = prompt("Enter a number")
// console.log(c)
// confirm 
// var d = confirm("Are you sure?")
// if (d == true) {
//     console.log("OK")
// }
// else {
//     console.log("Cancel")
// }

val = window.location;   
val = window.location.host;
val = window.location.hostname;
val = window.location.port;
val = window.location.protocol
val = window.location.href;

console.log(val)
