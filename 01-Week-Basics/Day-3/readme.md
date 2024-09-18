1-Değişken Atamaları
2-DOM Manipulation
3-Event Listeners
4-ES5/ES6 function
5-Rest/Spread Operators

[x=2, y=3] = [1];
console.log(x); // 1
console.log(y); // 3

[x=2, y=3] = [1, 4];
console.log(x); // 1
console.log(y); // 4

var baslik = document.querySelector("h1");
baslik.style.color = "red";

var elements = document.querySelectorAll("li");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("mouseover", function() {
        this.style.color = "blue";
    });
    elements[i].addEventListener("mouseout", function() {
        this.classList.toggle("benimClass");
    });
}

// ES5 Fonksiyonu
let Es5 = function() {
    console.log("es5");
};
Es5();

// ES6 Arrow Fonksiyonu
let Es6 = () => {
    console.log("es6");
};
Es6();


function y(...numbers) {
    return numbers.reduce((a, b) => a * b);
}
console.log(y(1, 2, 3)); // 6

let array1 = [11, 12, 13];
let array2 = [21, 22, 23];
let mergedArray = [...array1, ...array2];
console.log(mergedArray);

# Day 3 - DOM Manipulation, Event Listeners, ES5/ES6 Functions, Rest/Spread Operators

In this repository, you will find the following files related to Day 3:

- `index.html`: This HTML file contains the necessary structure for the webpage.
- `script.js`: This JavaScript file includes code for DOM manipulation, event listeners, ES5/ES6 functions, and the usage of rest/spread operators.

## DOM Manipulation

The `script.js` file demonstrates how to manipulate the DOM using JavaScript. It includes examples such as changing the color of an `h1` element to red and adding event listeners to `li` elements.

## Event Listeners

The `script.js` file also showcases the usage of event listeners. It demonstrates how to change the color of an element on mouseover and toggle a class on mouseout.

## ES5/ES6 Functions

The `script.js` file includes examples of both ES5 and ES6 functions. It defines an ES5 function called `Es5` and an ES6 arrow function called `Es6`. These functions are then invoked and their respective messages are logged to the console.

## Rest/Spread Operators

The `script.js` file demonstrates the usage of rest and spread operators. It includes a function called `y` that accepts any number of arguments using the rest operator and returns their product. It also showcases how to merge two arrays using the spread operator.

Feel free to explore the code in the `script.js` file to understand these concepts better.
