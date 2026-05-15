const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", function(num1) {
     rl.question("Enter second number: ", function(num2) {
        let a = Number(num1);
        let b = Number(num2);
        let biggest = (a > b) ? a : b;
        console.log("Biggest number is:", biggest);
        rl.close();
    });
});