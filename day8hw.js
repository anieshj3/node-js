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

            <h2>Tech Support File Upload</h2>

            <form action="/upload" method="post" enctype="multipart/form-data">

                <input type="file" name="myfile"><br><br>

                <input type="submit" value="Upload File">

            </form>

        `);

        res.end();
    }

    // Upload handling
    else if (req.url === "/upload" && req.method === "POST") {

        // Create formidable form object
        const form = formidable({ multiples: false });

        // Parse form data
        form.parse(req, (err, fields, files) => {

            if (err) {

                res.write("Error uploading file");

                return res.end();
            }

            // Temporary uploaded file path
            const oldPath = files.myfile[0].filepath;

            // New file path
            const newPath =
                __dirname +
                "/uploads/" +
                files.myfile[0].originalFilename;

            // Move file to uploads folder
            fs.rename(oldPath, newPath, (err) => {

                if (err) {

                    res.write("File moving failed");

                    return res.end();
                }

                // Create email transporter
                const transporter = nodemailer.createTransport({

                    service: "gmail",

                    auth: {

                        user: "yourgmail@gmail.com",

                        pass: "your_app_password"
                    }
                });

                // Email details
                const mailOptions = {

                    from: "yourgmail@gmail.com",

                    to: "admin@example.com",

                    subject: "File Uploaded",

                    text: "A user uploaded a file to the support portal."
                };

                // Send email
                transporter.sendMail(mailOptions, (error, info) => {

                    if (error) {

                        console.log(error);

                        res.write("File uploaded but email failed");
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

// Start server
server.listen(4000, () => {

    console.log("Server running at http://localhost:4000");
});