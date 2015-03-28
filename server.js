var express 		 = require('express'),
    serverController = require('./server/controllers/serverMeanController')
    bodyParser 		 = require('body-parser'),
    mongoose		 = require('mongoose'),
    app 			 = express(),
    port 			 = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/courses');

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/client/views/index.html');
})

//using body-parser as we are requesting for req.body in serverController
app.use(bodyParser());
app.post('/api/courses', serverController.create);
app.get('/api/courses', serverController.list);

//using this as in html we can directly access controllers and other resources
app.use('/js', express.static(__dirname + '/client/js'));

app.listen(port, function() {
	console.log("started the server at port: ",port);
})