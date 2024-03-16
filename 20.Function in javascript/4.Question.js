// Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the
// amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
// function with various incomes.

// Up to ₹2,50,000: No tax (with a rebate under section 87A).
// ₹2,50,000 - ₹5,00,000: 5%.
// ₹5,00,000 - ₹7,50,000: 10%.
// ₹7,50,000 - ₹10,00,000: 15%.
// ₹10,00,000 - ₹12,50,000: 20%.
// ₹12,50,000 - ₹15,00,000: 25%.
// Above ₹15,00,000: 30%

// Assuming income to be taxable income and ignoring rebate:

function calculateTax(income){
    let tax = 0;
    if(isNaN(income)  || income<0){
        return "Enter valid income"
    }
    else if(income<250000){
        return `Income:${income} No tax`;
    }
    else if(income<500000){
        tax = income*(5/100);
        return `Income:${income} tax: ${tax} tax Rate: 5%`;
    }
    else if(income<750000){
        tax = income*(10/100);
        return `Income:${income} tax: ${tax} tax Rate: 10%`;
    }
    else if(income<1000000){
        tax = income*(15/100);
        return `Income:${income} tax: ${tax} tax Rate: 15%`;
    }
    else if(income<1250000){
        tax = income*(20/100);
        return `Income:${income} tax: ${tax} tax Rate: 20%`;
    }
    else if(income<=1500000){
        tax = income*(25/100);
        return `Income:${income} tax: ${tax} tax Rate: 25%`;
    }
    else{
        tax = income*(30/100);
        return `Income:${income} tax: ${tax} tax Rate: 30%`;
    }
}

console.log(calculateTax(10000));
console.log(calculateTax(251000));
console.log(calculateTax(710000));
console.log(calculateTax(1510000));