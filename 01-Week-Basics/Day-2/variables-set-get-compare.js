// alert("2nd alert")
// console.log("2nd log")
// console.error(true)

// Variables
// var name ;
// var 3name // cannot be defined with a numerical expression 
// Cannot be defined with command names
// Cannot be defined with multiple words
// var name, surname;
// var function-based variable 
// if (true) {
//     var x = 10;
// }
// console.log(x); // 10 (Accessible from outside the block)

// if (true) {
//     let y = 20;
// }
// console.log(y); // Error: y is not defined (Not accessible from outside the block)



// console.log(a); // undefined
// var a = 5;

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 10;

// var x = 1;
// var x = 2;
// console.log(x); // 2

// let y = 3;
// let y = 4; // Error: Identifier 'y' has already been declared

// const w = 15;
// w = 20; // Error: Assignment to constant variable
// console.log(w); // 10


//Variable Types 
// var x ;
// console.log(typeof x); // undefined
// var y = null;
// console.log(typeof y); // object

// var name = "Mertcan";
// console.log(typeof name); // string

// var age = 25;
// console.log(typeof age); // number

// var study =true;
// console.log(typeof study); // boolean
// //Reference Types - Objects 
// //Array
// var color = ["Blue", "Green", "Yellow"];
// console.log(color);

// var person = {
//     name: "Mertcan",
//     age: 25

// }
// console.log(typeof person);

//Operators
// var result ;
// const a = 70;
// const b = 30;
// result = a + b;  
// result = a - b;
// result = a * b;
// result = a / b;
// result = a % b;
// let z = 10;
// let t = 9   
// // result = x++; //const cannot be changed 
// result = z++ //increased the number by one but not stored in memory, prints 10
// result= ++z //increased the number by one and printed it 
// result = z-- //decreased the number by one but not stored in memory, prints 11  
// result = --z //decreased the number by one and printed it

// //Assignment Operators
// result = a; //assigned a value to the result
// result += a; //result = result + a;
// result -= a; //result = result - a;
// result *= a; //result = result * a; takes the power
// result /= a; //result = result / a;
// result %= a; //result = result % a; 

// //Comparison Operators
// result =z == t; //false
// t= 9;

// result = z == t; //true
// result = z === t; //true
// t="9"
// result = z === t; //false 3 equals sign checks the type
// result = z != t; //false 
// t=10
// result = z != t; //false
// //Logical Operators
// // && (And) Operator
// // || (Or) Operator
// // ! (Not) Operator
// z=10
// t=9
// result = (z>t) && (a>b) //true
// result = (z>t) || (a<b) //true
// result = !(z>t) //false

var d = new Date();
console.log(d);

 // set Methods
 d.setFullYear(2023);
 d.setMonth(10)
 d.setDate(15);
 d.getDate(30);

//get Methods
console.log(d.getFullYear());
console.log(d.getMonth()); // January is 0th index, September is 8th index
console.log(d.getDate()); // day
console.log(d.getDay()); // days 0-6 Sunday is 0th index
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());




console.log(result)
console.log(typeof result)
