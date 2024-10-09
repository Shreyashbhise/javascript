function outerFunction() {
    let outerVariable = "I am outer varaible";

    function innerFunction() {
        console.log(outerVariable);

    }
    return innerFunction;
}

const closureExample = outerFunction();
closureExample();


//////////////////////////////////////////////////////

function fun1() {
    let a = 5;

    function fun2() {
        console.log(a)
    }
    a=8;
    return fun2;
}

const abc = fun1();
abc();             // we do not retirn variable value we return variable reference
