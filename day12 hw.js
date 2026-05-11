const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const dbName = "libraryDB";

async function manageBooks() {

    const client = new MongoClient(url);

    try {

        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db(dbName);

        const books = db.collection("books");

        await books.insertMany([
            { title: "Java Basics", author: "John", location: "Shelf A" },
            { title: "Node.js Guide", author: "Dean", location: "Shelf B" },
            { title: "Python 101", author: "Deepak", location: "Shelf D" },
            { title: "C++ Mastery", author: "Dean", location: "Shelf C" },
            { title: "Data Structures", author: "Ravi", location: "Shelf B" },
            { title: "React Handbook", author: "Derek", location: "Shelf D" }
        ]);

        console.log("Books Inserted Successfully");

        await books.updateOne(
            { title: "Java Basics" },
            { $set: { location: "Shelf Z" } }
        );

        console.log('"Java Basics" Updated');

        await books.updateMany(
            { author: "Dean" },
            { $set: { location: "Shelf E" } }
        );

        console.log('Books Written by "Dean" Updated');

        await books.deleteOne({
            title: "Python 101"
        });

        console.log('"Python 101" Deleted');

        await books.deleteMany({
            title: { $regex: "^D" }
        });

        console.log('Books Starting with "D" Deleted');

        const remainingBooks = await books.find().toArray();

        console.log("\nRemaining Books:");
        console.log(remainingBooks);

    } catch (error) {

        console.log("Error:", error);

    } finally {

        await client.close();
        console.log("MongoDB Connection Closed");
    }
}
manageBooks();