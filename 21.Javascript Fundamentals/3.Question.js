// Q3. Write a JavaScript program that demonstrates the use of character classes in regular expressions.
// Create a function that searches for specific character classes in a given string and returns the matches. Test
// the function with patterns for digits, uppercase letters, lowercase letters, and special characters.


function findCharacterClassMatches(inputString) {
    const digitPattern = /\d/g; // Matches any digit (0-9)
    const uppercasePattern = /[A-Z]/g; // Matches any uppercase letter
    const lowercasePattern = /[a-z]/g; // Matches any lowercase letter
    const specialCharPattern = /[^A-Za-z0-9]/g; // Matches any special character (non-alphanumeric)
  
    const digitMatches = inputString.match(digitPattern) || [];
    const uppercaseMatches = inputString.match(uppercasePattern) || [];
    const lowercaseMatches = inputString.match(lowercasePattern) || [];
    const specialCharMatches = inputString.match(specialCharPattern) || [];
  
    return {
      digits: digitMatches,
      uppercaseLetters: uppercaseMatches,
      lowercaseLetters: lowercaseMatches,
      specialCharacters: specialCharMatches,
    };
  }
  

  const testString = "Hello, World! 123";
  const matches = findCharacterClassMatches(testString);
  
  console.log("Digits:", matches.digits);
  console.log("Uppercase Letters:", matches.uppercaseLetters);
  console.log("Lowercase Letters:", matches.lowercaseLetters);
  console.log("Special Characters:", matches.specialCharacters);
  