// bookStore.js

const fs = require("fs");

// Sentence to write into the file
const bookSummary = "Books are a uniquely portable magic.";

// Write data into book.txt
fs.writeFile("book.txt", bookSummary, (writeErr) => {
    if (writeErr) {
        console.log("Error while writing to file:", writeErr);
        return;
    }

    console.log("Writing completed successfully.");

    // Read data from book.txt
    fs.readFile("book.txt", "utf8", (readErr, data) => {
        if (readErr) {
            console.log("Error while reading the file:", readErr);
            return;
        }

        console.log("Reading completed successfully.");
        console.log("File Content:");
        console.log(data);
    });
});