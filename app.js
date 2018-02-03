var express = require('express');
var app = express();
var http = require('http').Server(app);

// Use template ejs and directory assets
app.use(express.static('assets'));
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
    res.render('index', { title: 'Node.js Tutorial' });
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