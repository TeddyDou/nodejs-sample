// Load express framework and http server
var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');

// Use template ejs and directory assets
app.use(express.static('assets'));
app.set('view engine', 'ejs');

// Required to parse post requests
app.use(bodyParser.urlencoded({ extended: false }));

// Configuration variables
var user = [];
var id = 0;
var port = 8000;

/**
 * Main page using boostrap
 */
app.get('/', function (req, res) {
    res.render('index', { title: 'Node.js Tutorial', hello: "Hello Dear Node.js" });
});

/**
 * Registration page through post
 * accepts user, password
 */
app.post('/register', function (req, res) {

    if (req.body.user && req.body.password) {
        console.log("Adding user: " + req.body.user);
        id++;
        var myUser = {id: id, user: req.body.user, password: req.body.password};
        user.push(myUser);
        res.send('OK');
    }
    else {
        console.log("Invalid request");
        res.send('FAIL');
    }

});

/**
 * get user info through api
 */
app.get('/user/:id', function (req, res) {

    var foundUser = false;
    for (var x in user) {
        if (user[x].id == req.params.id) {
            foundUser = user[x];
        }
    }
    if (foundUser) {
        res.send(foundUser);
    }
    else {
        res.send("User not found");
    }

});

// Extra pages
app.get('/about.html', function (req, res) {
    res.send("This is my about page");
});

app.get('/contact.html', function (req, res) {
    res.send("This is my contact page");
});

// Create server on port 8000
http.listen(port, function () {
    console.log('version 0.0.1 listening on *:' + port);
});