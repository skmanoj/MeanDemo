var mongoose = require('mongoose');

//go to database and use a database say use Xyz, then courseos collection will be created in it
module.exports = mongoose.model('Courseo', {
	name: String
});