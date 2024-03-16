// Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
// recursion. Test the function with different inputs.


function factNum(num){
    if(isNaN(num) || num<0){
        return "Enter valid input"
    }
    else if(num === 0){
        return 1;
    }

    return num * factNum(num-1);
}


console.log(factNum(0));
console.log(factNum(2));
console.log(factNum(5));
console.log(factNum(7));