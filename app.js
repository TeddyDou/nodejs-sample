var express = require('express');
var app = express();
var http = require('http').Server(app);

app.get('/', function (req, res) {
    res.send("My first Node.js application");
});

app.get('/about.html', function (req, res) {
    res.send("This is my about page");
});

app.get('/contact.html', function (req, res) {
    res.send("This is my contact page");
});

http.listen(8000, function () {
    console.log('version 0.0.1 listening on *:8000');
});