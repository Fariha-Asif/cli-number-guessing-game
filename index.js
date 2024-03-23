#! /usr/bin/env node
import inquirer from "inquirer";
// 1. computer will generate a random number.
// 2. User input for guessing number.
// 3. compare User number and random number and show result.
let randomNumber = Math.floor(Math.random() * 6 + 1); // 0 ki value add nh hogi.. 1 c strt hogi... 10 ki jga koi sa b num dy skte hen yeh phr 1 se ly kr wha tk ly kr jye ga
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6:",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed right number.");
}
else {
    console.log("You guessed wrong number.");
}
;
