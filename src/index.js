var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    path = require('path');

// Mark all items under the /public path as static files
app.use(express.static(path.join(__dirname, 'public')));

// Returns the index page
app.get('/', function getIndexPage (req, res){
    res.sendFile(__dirname + '/views/index.html');
});

// On Socket.IO connection, wire up the event handlers
io.on('connection', function(socket){

    // When a new user enters the chat...
    socket.on('chat-user-logged-in', function (user) {
        io.emit('chat-event-message', user.username + ' has entered the arena.');
    });

    // When a new chat message is submitted...
    socket.on('chat-message', function (message){
        io.emit('chat-message', message);
    });
});

// Listen on port 3000 for the server
http.listen(3000, function () {
    console.log("Server startup on port 3000");
});