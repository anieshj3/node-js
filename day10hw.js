const fs = require("fs");
const path = require("path");

// File names
const introPath = path.join(__dirname, "intro.txt");
const conclusionPath = path.join(__dirname, "conclusion.txt");
const outputPath = path.join(__dirname, "full_report.txt");

// Store chunks
let chunks = [];

// Read intro.txt
const introStream = fs.createReadStream(introPath);

introStream.on("data", (chunk) => {
    chunks.push(chunk);
});

introStream.on("end", () => {

    // Read conclusion.txt
    const conclusionStream = fs.createReadStream(conclusionPath);

    conclusionStream.on("data", (chunk) => {
        chunks.push(chunk);
    });

    conclusionStream.on("end", () => {

        // Merge buffers
        const finalBuffer = Buffer.concat(chunks);

        // Write to full_report.txt
        const writeStream = fs.createWriteStream(outputPath);

        writeStream.write(finalBuffer);

        writeStream.end();

        writeStream.on("finish", () => {
            console.log("Merging complete!");
            console.log("File saved at:");
            console.log(outputPath);
        });
    });

    conclusionStream.on("error", (err) => {
        console.log("Error reading conclusion.txt");
        console.log(err.message);
    });
});

introStream.on("error", (err) => {
    console.log("Error reading intro.txt");
    console.log(err.message);
});