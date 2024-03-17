// Q1. Write a JavaScript function called outerFunction that takes a parameter and returns an inner function.
// The inner function should access both the parameter of outerFunction and a variable declared within
// outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these
// variables even after outerFunction has finished executing.

function outerFunction(a){
    let b = 5;
    return function (){
        return a+b;
    }
}

const innerResult = outerFunction(2);

console.log(innerResult());