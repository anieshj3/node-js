const fs = require("fs");

fs.writeFileSync("user.txt", "Welcome John");

const data = fs.readFileSync("user.txt", "utf8");

function checkUser(content) {
    const name = content.split(" ")[1];

    if (name === "John") {
        console.log("Valid User");
    } else {
        console.log("Unknown User");
    }
}

checkUser(data);