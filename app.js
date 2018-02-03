// Load express framework and http server
var express = require('express');
var app = express();
var http = require('http').Server(app);

// Use template ejs and directory assets
app.use(express.static('assets'));
app.set('view engine', 'ejs');


// Main page
app.get('/', function (req, res) {
    res.render('index', { title: 'Node.js Tutorial', hello: "Hello Dear Node.js" });
});

// Extra pages
app.get('/about.html', function (req, res) {
    res.send("This is my about page");
});

app.get('/contact.html', function (req, res) {
    res.send("This is my contact page");
});

// Create server on port 8000
http.listen(8000, function () {
    console.log('version 0.0.1 listening on *:8000');
});