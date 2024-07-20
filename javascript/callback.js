function doSomething(callback) {
    let sum =  10 +  20;
    callback(sum);
}

function handleResult(sum) {
    console.log("The sum is :", sum);
}
doSomething(handleResult);




function addNumber(a , b , callback) {
    const sum = a + b;
    callback(sum);
}
function addSum(sum) {
    console.log("The sum is :",sum);
}

function doubleAdd(sum) {
    const doubleSum = sum * 2;
    console.log("The double sum is :", doubleSum);
}
addNumber(10,60,addSum);


function greet(name, callback) {
    console.log('Hello, ' + name + '!');
    callback();
}

function sayGoodbye() {
    console.log('Goodbye!');
}

greet('Alice', sayGoodbye);


function greet(name,callback) {
    console.log("Hello ",  + name + '!');
    callback();
}

function sayGoodbye() {
    console.log('Goodbye!');
}

greet("Rutuja",sayGoodbye);