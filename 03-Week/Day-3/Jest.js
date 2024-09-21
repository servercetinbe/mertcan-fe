//  function sum (a, b) {
//     return a + b;
// }
// module.exports = sum;

// function myFunction(input) {
// if(typeof input !== 'number'){
//     throw new Error('Invalid input');
// }
// }

// module.exports = myFunction;


//Asencronous Testing
// function fetchData(callback) {
//     setTimeout(() => {
//       callback('Mertcan');
//     }, 1000);
//   }

//   module.exports = fetchData

function fetchPromiseData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Mertcan'), 1000);
    });
}
module.exports = fetchPromiseData;
     

// Mock Functions and Spice
