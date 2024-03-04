// Use a ternary operator to check that a person is eligible to vote or not by checking his age. If the age of the
// person is less than 18 then “You cannot vote” should be logged else “You can vote” should be logged.

let age = 23;

let eligibleToVote = age<18? "You cannot vote": "You can vote";

console.log(eligibleToVote);