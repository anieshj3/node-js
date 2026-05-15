const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the first number  ",function(base){
    rl.question("Enter the second number  ",function(height){
        area=Number(base)*Number(height)/2
        console.log(area)
        rl.close()
    })
})