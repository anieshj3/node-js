const http = require("http");
const fs = require("fs");
const formidable = require("formidable");
const nodemailer = require("nodemailer");

// Create server
const server = http.createServer((req, res) => {

    // Home page
    if (req.url === "/") {

        res.writeHead(200, { "Content-Type": "text/html" });

        res.write(`
            <h2>Upload File</h2>

            <form action="/upload" method="post" enctype="multipart/form-data">

                <input type="file" name="myfile"><br><br>

                <input type="submit" value="Upload">

            </form>
        `);

        res.end();
    }

    // Upload page
    else if (req.url === "/upload" && req.method === "POST") {

        const form = formidable({ multiples: false });

        form.parse(req, (err, fields, files) => {

            if (err) {

                res.write("Error reading file");

                return res.end();
            }

            // Old path
            const oldPath = files.myfile[0].filepath;

            // New path
            const newPath =
                __dirname +
                "/uploads/" +
                files.myfile[0].originalFilename;

            // Move file
            fs.rename(oldPath, newPath, (err) => {

                if (err) {

                    res.write("File upload failed");

                    return res.end();
                }

                // Create transporter
                const transporter = nodemailer.createTransport({

                    service: "gmail",

                    auth: {

                        user: "yourgmail@gmail.com",

                        pass: "your_app_password"
                    }
                });

                // Mail details
                const mailOptions = {

                    from: "yourgmail@gmail.com",

                    to: "friend@example.com",

                    subject: "File Uploaded",

                    text: "A file was uploaded successfully."
                };

                // Send mail
                transporter.sendMail(mailOptions, (error, info) => {

                    if (error) {

                        console.log(error);

                        res.write("File uploaded but email not sent");
                    }

                    else {

                        console.log("Email sent successfully");

                        res.write("File uploaded and email sent successfully!");
                    }

                    res.end();
                });
            });
        });
    }

    // Invalid page
    else {

        res.writeHead(404, { "Content-Type": "text/plain" });

        res.end("Page not found");
    }

});

// Changed port from 3000 to 4000
server.listen(4000, () => {

    console.log("Server running at http://localhost:4000");
});