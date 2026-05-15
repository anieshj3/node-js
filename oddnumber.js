const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the limit  ",function(num){
    for(i=1;i<=num;i++)
        if(i%2==1)
            console.log(i)
})