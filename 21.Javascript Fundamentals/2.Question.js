// Q2. Create a JavaScript program that demonstrates the basic usage of regular expressions. Write a function
// that takes a regex pattern and a string as input and returns true if there is a match, and false otherwise. Test
// the function with various patterns and strings.

function patternMatch(regex, str){
    return regex.test(str);
}


console.log(patternMatch(/go{1,2}d/i,"good"));  //true
console.log(patternMatch(/go{1,2}d/i,"gooood")); //false

console.log(patternMatch(/[a-z][0-9]@[A-Z]/,"a9@B")) //true
console.log(patternMatch(/[a-z][0-9]@[A-Z]/,"z@@Z")) //false