# Node.js Tutorial #

This is a simple tutorial that shows to load an HTML view using boostrap and some basic post and get requests

### Requirements ###

* Node.js 6+
* nodemon (Optional for dev environment)

### Installation ###

    npm install

### Usage ###

On a dev environment with auto-restart:

    nodemon app.js

On a production environment:

    node app.js

For registration use a service like postman to send the fields (user, password) through a post request to http://localhost:8000/register

For user information you can use curl or a browser to browse http://localhost:8000/user/USER_ID where user id is an integer starting from 1