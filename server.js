var http = require('http');
var fs = require('fs');
var events = require('events');

// Create event emitter
var eventEmitter = new events.EventEmitter();

// Create event handler
var pageLoadedHandler = function (pageName) {
    console.log(pageName + " page was loaded");
};

// Assign event
eventEmitter.on('pageLoaded', pageLoadedHandler);

// Create server
http.createServer(function (req, res) {

    if (req.url === '/about') {

        fs.readFile('about.html', function (err, data) {
            if (err) {
                res.writeHead(500);
                res.end("Error loading page");
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();

                // Trigger event
                eventEmitter.emit('pageLoaded', 'About');
            }
        });

    } else if (req.url === '/contact') {

        fs.readFile('contact.html', function (err, data) {
            if (err) {
                res.writeHead(500);
                res.end("Error loading page");
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();

                // Trigger event
                eventEmitter.emit('pageLoaded', 'Contact');
            }
        });

    } else {
        // Page not found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write("Page Not Found");
        res.end();
    }

}).listen(3000);

console.log("Server running at http://localhost:3000/");