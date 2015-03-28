var Course = require('../models/serverMeanModel');

module.exports.create = function (req, res) {
  var course = new Course(req.body);
  course.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Course.find({}, function (err, results) {
    res.json(results);
  });
}