"use strict";

const mongoose = require("mongoose");

//model for a single note in the database
module.exports =  mongoose.model('Logs',
	mongoose.Schema({
		userAgent: String,
		route: String,
		verb: String
	})
);