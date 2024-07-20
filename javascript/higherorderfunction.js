// Higher order function take function as a arguments

function operate(a,b,operation) {

    return a + b;


}

function add(x,y) {
    return x + y;
}

function multiply(x,y) {
    return x * y;

}

console.log(operate(10,5,add));
console.log(operate(2,4,multiply));