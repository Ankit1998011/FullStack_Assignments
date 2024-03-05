// Q4. Generate numbers between any 2 given numbers.
// Ex
// const num1 = 10
// const num2 = 25;
// Output: 11, 12, 13, ...., 25


let num1 = 10;

let num2 = 25;


// num1 is excluded on basis of given question
for(num1 =num1+1; num1<=num2; num1++){
    console.log(num1);
}