// Use a nested ternary operator to check that a number is positive, negative or zero. You have to print
// “positive” if the number is positive and similarly for negative and zero also.



let num = -3;

let result = num>0? `${num} is positive`: num === 0? `${num} is zero`: `${num} is negative`;

console.log(result);