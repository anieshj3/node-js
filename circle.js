const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the radius  ",function(radius){
        area=3.14*Number(radius)*Number(radius)
        console.log("Area of a circle",area)
        rl.close()

})