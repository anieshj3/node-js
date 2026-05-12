const buffer1 = Buffer.from("NodeJS is fast");

console.log("Original Buffer:");
console.log(buffer1);

const slicedBuffer = buffer1.slice(0, 6);

console.log("\nSliced Buffer:");
console.log(slicedBuffer.toString());

const buffer2 = Buffer.from("Powerful");

console.log("\nSecond Buffer:");
console.log(buffer2.toString());

const result = Buffer.compare(slicedBuffer, buffer2);

if (result < 0) {
    console.log("\nNodeJS comes first alphabetically.");
} else if (result > 0) {
    console.log("\nPowerful comes first alphabetically.");
} else {
    console.log("\nBoth buffers are equal.");
}

const jsonData = slicedBuffer.toJSON();

console.log("\nBuffer JSON:");
console.log(jsonData);