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
    const cho = readlineSync.questionInt("Enter your choice: ");
    if (cho === 1) {
        const depAmount = readlineSync.questionFloat("Enter deposit amount: ");
        amount += depAmount;
        console.log(`Updated balance: ${amount}`);
    }
    if (cho === 2) {
        
    }
    if (cho === 3) {
        
    }
    if (cho === 4) break;
}