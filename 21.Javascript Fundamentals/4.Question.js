// Q4. Create a JavaScript program that takes a regex pattern and a string as input. Write a function that not
// only checks if there is a match but also extracts specific parts of the matched text using groups. Test the
// function with patterns that include groups to capture different parts of a date (e.g., day, month, and year)
// from a given string.


function extractDateParts(inputString, pattern) {
    const match = inputString.match(pattern);
  
    if (!match) {
      return null; // No match found
    }
  
    
    const day = match[1]; // Capturing group for day
    const month = match[2]; // Capturing group for month
    const year = match[3]; // Capturing group for year
  
    return { day, month, year };
  }
  

  const dateString = "Today is 17-03-2024";
  const datePattern = /(\d{2})-(\d{2})-(\d{4})/; // Pattern for day-month-year format
  
  const extractedDate = extractDateParts(dateString, datePattern);
  if (extractedDate) {
    console.log("Day:", extractedDate.day);
    console.log("Month:", extractedDate.month);
    console.log("Year:", extractedDate.year);
  } else {
    console.log("No valid date found.");
  }
  