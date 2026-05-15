const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter first number: ", function(num1) {

    rl.question("Enter second number: ", function(num2) {

        let a = Number(num1);
        let b = Number(num2);

        console.log("Before Swapping:");
        console.log("a =", a);
        console.log("b =", b);

        let temp = a;
        a = b;
        b = temp;

        console.log("After Swapping:");
        console.log("a =", a);
        console.log("b =", b);

        rl.close();
    });

});