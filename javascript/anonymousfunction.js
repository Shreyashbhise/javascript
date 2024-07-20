// Anonymous function assigned to a variable 

// const add = function(a,b) {
//     return a + b;
// }
// let result = add(2,5);
// console.log(result);

// // Anonymous function as callback

// setTimeout(function() {
//     console.log("This message is after 2 second")
// },2000);

// // Immediately invoked function expression

// (function(){
//     console.log("This function run immediately")
// }) ();


// const prime = function(a,b) {
//     return a +b;

// }
// let primeone = prime(28,34);
// console.log(primeone);

// setTimeout(function() {
//     console.log("This message run after thrre second")
// },2000);

// (function() {
//     console.log("fast");
// })  ();


const greet = function(a,b) {
    return a + b;

}

let greeting = greet(2,5);
console.log(greeting);

// as a callback

setTimeout(function() {
    console.log("This msg run after three second")
},3000);


(function() {
    console.log("fast");
}) ();


const prime = function(a,b) {
    return a + b;

}
let amazon = prime(2,5);
console.log(amazon);

// as a callback

setTimeout(function() {
    console.log("This message run after three second")
},3000);

//iife

(function() {
    console.log("fast");
}) ();