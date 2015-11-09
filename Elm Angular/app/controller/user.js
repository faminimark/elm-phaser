"use strict";
require('../model/user.js');
var mongoose = require('mongoose'),
	User = mongoose.model('Employee'),
	_ = require('lodash');

exports.create = function(req, res){
	var user = new User(req.body);
	user.save(function(err){
		if(err){
			return res.status(400).send({message: err});
		}else{
			res.json(user); 
		}
	});
};
	
exports.list = function(req, res) {
	User.find().sort('-created').populate('user', 'username').exec(function(err, users) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(users);
		}
	});

};

exports.update = function(req, res){
	var id = req.body.id;
		User.findById(id, function(err, user){
			if(err) throw err;
			user.FirstName = req.body.FirstName;
			user.LastName = req.body.LastName;
			user.save(function(err, result){
				if(err) throw err;
				res.json(result);
			});
		});
};

exports.delete = function (req, res) {
  var id = req.body.id;
 	User.remove({_id: id},function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(User);
    }
  });
};