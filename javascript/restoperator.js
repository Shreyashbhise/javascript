// Rest operator in array destructing

// let [first,second,...rest] = [1,2,3,4,5,6,7];
// console.log(first);
// console.log(second);
// console.log(rest);

// Rest operator in object destructing

// let person = {name: "Rutuja", age: 25, city: 'New York',country:'USA'};
// let {name,age,...rest} = person;
// console.log(name);
// console.log(rest);

// // Rest operator in function  parameter

// function sum(...number) {
//     return number.reduce((total,number) => total + number,0);

// }

// console.log(sum(1,2,3,4));
// console.log(sum(7,8));


// let [first,second,third,fourth,...rest] = [1,2,3,4,5,6,7,];

// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);
// console.log(rest);


let prime = {name: 'javascript', age: 23, framework: 'express'};
let {name,age,...rest} = prime;

console.log(name);
console.log(rest);