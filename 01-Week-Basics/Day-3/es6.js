//es5
// let Es5 = function () {
//     console.log("es5")
// }

// Es5();

//es6
// let Es6 = () => {  
//     console.log("es6")
//  }
// Es6();
//parameters es5
// let paramsEs5 = function (a, b) {   
//     return a + b;
// }
// console.log(paramsEs5(2, 3));
// //parameters es6
// let paramsEs6 = (a, b) => {   
//     return a + b;
// }
// console.log(paramsEs6(5, 3));

// let obj = { 
//     category: "Sporting Goods",
//     names : ["futbol", "Basketbol", "Basketball"],
//     call: function() {
//         this.names.map(function(name) {
//             console.log(`${this.category} ${name}`);
        
//     });
// }
// }
// obj.call();

// function sum(a,b,c) {
//     return a + b + c;
// }
//   console.log(sum(1,2,3));
//   let numbers = [1,2,3];
//   //es5
//   console.log(sum.apply(null, numbers));

//   //es6
//   console.log(sum(...numbers));
//   let array =[11,12,13];
//   let array2 = [21,22,23];
//   let array3 = [...array, ...array2];
//   console.log(array3);


//REST OPERATOR
function x(a,b,c) {
    return a*b*c

}
console.log(x(1,2,3));
console.log(x(1,2)) // NaN
console.log(x(1,2,3,4,5,6,7,8,9,10)); // 1*2*3=6

function y(...numbers) {
    return numbers.reduce((a,b) => a*b);
}
console.log(y(1,2,3,4,5,6,7,8,9,10)); // 1*2*3*4*5*6*7*8*9*10=3628800
console.log(y(1,2,3)); // 1*2*3=6  
console.log(y(1,2)); // 1*2=2