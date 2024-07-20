function outerFunction() {
    let outerVariable = "I am outer varaible";

    function innerFunction() {
        console.log(outerVariable);

    }
    return innerFunction;
}

const closureExample = outerFunction();
closureExample();


