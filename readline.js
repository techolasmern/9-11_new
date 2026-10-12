const readlineSync = require("readline-sync");

// const response = readlineSync.question("What's your name? ");
// console.log(`Hello: ${response}`);

// const n1 = readlineSync.questionFloat("Enter first number: ");
// console.log(`First Number: ${n1}`);
// const n2 = readlineSync.questionFloat("Enter second number: ");
// console.log(`Second Number: ${n2}`);
// const sum = n1 + n2;
// console.log(`Sum: ${sum}`);

// ATM

let amount = 1000;

console.log(`1. Deposit\n2. Withdraw\n3. Balance\n4. Exit`);

while (true) {
    const choice = readlineSync.questionInt("Enter your choice: ");
    if (choice === 1) {
        const depAmount = readlineSync.questionFloat("Enter deposit amount: ");
        amount += depAmount;
        console.log(`Updated balance: ${amount} INR`);
    }
    if (choice === 2) {
        const withdrawAmount = readlineSync.questionFloat("Enter withdraw amount: ");
        if (withdrawAmount > amount) {
            console.log("Insufficient balance");
        } else {
            amount -= withdrawAmount;
            console.log(`Withdrawal successful. Updated balance: ${amount} INR`);
        }
    }
    if (choice === 3) {
        console.log(`Your balance: ${amount} INR`);
    }
    if (choice === 4) break;
}