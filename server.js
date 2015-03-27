var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/client/views/index.html');
})

app.use('/js', express.static(__dirname + '/client/js'));

app.listen(port, function() {
	console.log("started the server at port: ",port);
})