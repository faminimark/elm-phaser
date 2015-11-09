'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
	EmpID:{
		type: String, required: true, index: { unique: true }
	},
	firstName: {
		type: String,
		required: true,
		default: "Some"
	},
	lastName: {
		type: String,
		required: true,
		default: "Employee"
	},
	score: {
		type: Number,
		required: false
	}
	
});

mongoose.model('Employee', EmployeeSchema);