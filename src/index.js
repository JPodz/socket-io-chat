var express = require('express'),
    app = express(),
	http = require('http').Server(app),
	io = require('socket.io')(http),
	path = require('path');

// Mark all items under the /public path as static files
app.use(express.static(path.join(__dirname, 'public')));

// Use the root path as the homepage for the app
app.get('/', function(req, res){
  	res.sendFile(__dirname + '/views/index.html');
});

// On Socket.IO connection, simple log a message for now
io.on('connection', function(socket){
  	console.log('A user has connected');
});

// Listen on port 3000 for the server
http.listen(3000, function () {
	console.log("Server startup on port 3000");
});