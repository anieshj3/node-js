// main.js

// Import modules
const user = require("./userInfo");
const formatName = require("./formatName");

// Format the name
const formattedName = formatName(user.name);

// Convert hobby to uppercase
const upperHobby = user.hobby.toUpperCase();

// Find hobby length
const hobbyLength = user.hobby.length;

// Display Output
console.log("Formatted Name:", formattedName);

console.log("Uppercase Hobby:", upperHobby);

console.log("Hobby Length:", hobbyLength);