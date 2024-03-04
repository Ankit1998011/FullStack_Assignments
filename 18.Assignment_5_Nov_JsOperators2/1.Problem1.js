// Problem: Explain the usage of ternary operator with syntax and write a program to check whether the number is even
// or odd using the ternary operator.


// The ternary operator is a concise way to write conditional statements.
// Syntax:  condition ? expression1 : expression2

// Here's how it works: if the condition evaluates to true, the ternary operator returns expression1; otherwise, it returns expression2.


let num = 23;

let evenOrOdd = (num%2 == 0)? `${num} is even` : `${num} is odd`;

console.log(evenOrOdd);