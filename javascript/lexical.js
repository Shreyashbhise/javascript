function outerFunction() {
    let outerVar = "I'm an outer variable";
  
    function innerFunction() {
      let innerVar = "I'm an inner variable";
      console.log(innerVar); // Logs: "I'm an inner variable"
      console.log(outerVar); // Logs: "I'm an outer variable"
    }
  
    return innerFunction;
  }
  
  const closureExample = outerFunction();
  closureExample(); // "innerVar" and "outerVar" are accessible due to lexical environment and closures
  
