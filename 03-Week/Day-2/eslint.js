/*

It is used to ensure that different people working on the project write in the same way and to standardize the code.

To install, use npm install eslint --save-dev
After installation, settings are made with the eslint --init command. Questions about the project are asked and settings are made.
Then the eslint file is created.
Provides version control

Select ECMAScript 6 and Node.js.
Select browser as the environment.
Select 2 Tabs for indentation.
Select Single for quotes.
Select Unix for linebreak.
Select No for semicolons.
Select JSON for config.

Main Purpose of Eslint
The main purpose is to increase the readability of the code and create a standard structure.
It automatically fixes some errors.
It scans the code to find syntax errors, logical errors, and potential security vulnerabilities.

Benefits of ESLINT
Writing quality and consistent code
Detecting errors early
Standard code writing within the team

To use globally, use npm install -g eslint
For local use, use npm install eslint --save-dev

npx eslint . // Scans all files in the project
npx eslint . --fix // Scans and fixes all files in the project

if(){
}

if()
{
}
*/


    // False: arrow function kullanılmamış
[1, 2, 3].map(function(num) {
    return num * 2;
  });
  
  // True:
  [1, 2, 3].map((num) => {
    return num * 2;
  });

  

  // False: curly spacing should be {key: value} instead of { key: value }

// const obj2 = {key: 'value'};

// // True:
// const obj1 = { key: 'value' };

// Incorrect: Mixed use of quotation marks quote-props
// const name1 = "John";

// // Correct:
// const name2 = 'John';

// Incorrect: Semicolon not used. There should be a semicolon at the end.
// const x = 5

// // Correct:
// const y = 5;

// Incorrect: No space after function name
// if (condition) doSomething();

// // Correct:
// if (condition) {
//   doSomething();
// }


// Incorrect:
// const x = 5;

// Correct:
// As long as the x variable is used, there is no problem.


// Incorrect:
// var x = 10;

// Correct:
// let x = 10;
// const y = 20;


// Incorrect: No space between function parameters
// const add = (a,b)=>a+b;

// // Correct:
// const add = (a, b) => a + b;
