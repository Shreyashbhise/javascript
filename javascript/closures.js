function outerFunction() {
  let outerVariable = "I'm an outer variable";

  function innerFunction() {
    console.log(outerVariable); // Access outerVariable from outer scope
  }

  return innerFunction;
}

const closureExample = outerFunction(); // Call outerFunction and store the returned innerFunction

closureExample(); // Call closureExample, which is actually innerFunction

// Even though outerFunction has finished executing, innerFunction retains access to outerVariable because of the closure.

function outerFunction() {
  let outerVariable = "I'm the outer variable";

  function innerFunction() {
    console.log(outerVariable); // innerFunction has access to outerVariable
  }

  return innerFunction; // outerFunction returns innerFunction
}

const closureExample1 = outerFunction(); // closureExample1 is now innerFunction with a reference to outerVariable
closureExample1(); // Calling closureExample1, which is actually innerFunction


