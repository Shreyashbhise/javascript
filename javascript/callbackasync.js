// function greet(name,callback) {
//     console.log('Hello, ' + name + '!');
//     setTimeout(callback,2000);  //  // Asynchronous operation

// }

// function sayGoodbye() { 
//     console.log('Goodbye');
// }

// greet('Javascript',sayGoodbye);

function greet(name,callback) {
    console.log('Hello ' + name + '!');
    setTimeout(callback,2000);

}
function sayGoodbye() {
    console.log('Goodbye');

}

greet('express',sayGoodbye);