// function doSomething(callback) {
//     let sum = 20 + 50;
//     callback(sum);

// }

// function handleResult(sum) {
//     console.log("The sum of number is : ", sum );
// }
// doSomething(handleResult);




// function addNumber(a,b,callback) {
//     const sum = a + b;
//     callback(sum);
// }

// function addSum(sum) {
//     console.log("The sum is : ", sum);
// }
// function doubleAdd(sum) {
//     const doubleSum = sum * 2;
//     console.log("The double sum is :", doubleSum);


// }

// addNumber(2,5,addSum);


function addNumber(a,b,callback) {
    const sum = a + b;
    callback(sum);

}

function addSum(sum) {
    console.log('The sum of number is:',sum);

}

function doubleAdd(sum) { 
    const doubleAdd = sum * 2;
    console.log('The double add is :',doubleAdd);
    
}
addNumber(20,50,doubleAdd);