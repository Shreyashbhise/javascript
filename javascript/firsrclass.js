
// asssign function to the varibale

const myVariable = function() {
    console.log("Inside thefunction ...");

}

myVariable();

// pass function as an arguments

function wishHappyBirthday() {
    return "Happy birthday ";
}

function wishPerson(wishmessage, name) {
    console.log(wishmessage(), name);

}

wishPerson(wishHappyBirthday, "Rutuja");

function wishHappyBirthday() {
    return "Happy Birthday";

}

function wishPerson(wishmessage,name) {
    console.log(wishmessage(),name);

}

wishPerson(wishHappyBirthday, "sakshi");


// return from other function
function sayHello() {
    // returning the function
    return function() {
       console.log("Hello!");
    }
 }

// Storing the returned function in the `newFun` variable
const newFun = sayHello();

// Calling the function which returned function with `newFun`
newFun();


// Calling returned function using double parentheses

function sayHello() {
    // returning the function
    return function() {
       console.log("Hello!");
    }
 }

// Calling returned function using double parentheses
sayHello()();

// Storing function in an array

const functionarray = [
    function() {return "Hello";},
    function() {return "Rutuja";}
];

console.log(functionarray[0]());
console.log(functionarray[1]());


