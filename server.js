var express = require('express')
    app = express()
    port = process.env.PORT || 3000

app.get('/', function(req, res) {
	res.send('hello nodemon')
})

app.listen(port, function() {
	console.log("started the server at port: ",port)
})