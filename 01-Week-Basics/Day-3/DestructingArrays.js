var x,y,other ;

// [x,y] = [1,2];
// console.log(x);
// console.log(y);

// [x,y,...other] = [1,2,3,4,5,6,7,8,9,10];
// console.log(x);
// console.log(y);
// console.log(other); // 3,4,5,6,7,8,9,10

[x=2,y=3] = [1];
console.log(x); // 1
console.log(y);// 3

[x=2,y=3] = [1,4];
console.log(x); // 1
console.log(y);// 4