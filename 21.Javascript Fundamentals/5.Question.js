// Q5. You are building a shipping application. Write a program that takes the type of package ("standard",
// "express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time
// based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and
// "overnight" would be delivered the next day.



function shippingApplication(package){
    package = package.toLowerCase(); // converting to lower case
    switch(package){
        case "standard": console.log("Delivery in 3-5 days");  // Standard delivery
                        break;
        case "express": console.log("Delivery in 1-2 days"); // express delivery
                        break;
        case "overnight": console.log("Delivery on next day");  // overnight delivery
                        break;
        default: console.log("Enter valid package name");  // invalid input
    }
}


console.log(shippingApplication("standard"));
console.log(shippingApplication("OVErnight"));
