const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const dbName = "workshopDB";
async function manageRegistrations() {

    const client = new MongoClient(url);

    try {

        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db(dbName);
        const registrations = db.collection("registrations");

        await registrations.deleteMany({});

        const sampleRegistrations = [
            { name: 'John', city: 'Trivandrum' },
            { name: 'Deepak', city: 'Kollam' },
            { name: 'Dean', city: 'Trivandrum' },
            { name: 'Rahul', city: 'Calicut' },
            { name: 'Ashwin', city: 'Calicut' },
            { name: 'Rolly', city: 'Alleppy' },
            { name: 'Nikhil', city: 'Kottayam' },
            { name: 'Raymond', city: 'Trivandrum' },
            { name: 'Dean', city: 'Calicut' },
        ];

        await registrations.insertMany(sampleRegistrations);

        console.log("Participants Inserted");

        await registrations.updateOne(
            { name: "John" },
            {
                $set: {
                    name: "Johnny",
                    city: "Chennai"
                }
            }
        );

        console.log("John Updated");

        await registrations.updateMany(
            { name: "Dean" },
            {
                $set: {
                    city: "Kollam"
                }
            }
        );

        console.log("Dean Records Updated");

        await registrations.deleteOne({
            name: "Deepak"
        });

        console.log("Deepak Deleted");

        await registrations.deleteMany({
            name: { $regex: "^D" }
        });

        console.log("Names Starting With D Deleted");

        const result = await registrations.find().toArray();

        console.log("\nRemaining Participants:");
        console.log(result);

    } catch (error) {

        console.log("Error:", error);

    } finally {

        await client.close();
        console.log("MongoDB Connection Closed");

    }
}
manageRegistrations();