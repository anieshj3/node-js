var manager = require("./managerInfo");
var capitalizeName = require("./capitalizeName");

var formattedName = capitalizeName(manager.name);
var upperRole = manager.role.toUpperCase();

var roleLength = manager.role.length;

var searchResult = manager.role.search("inventory");

console.log("Manager Name:", formattedName);
console.log("Manager Role (Uppercase):", upperRole);
console.log("Number of characters in role:", roleLength);
console.log("Search result for 'inventory':", searchResult);
