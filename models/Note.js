"use strict";

const mongoose = require("mongoose");

//model for a single note in the database
module.exports =  mongoose.model('Notes',
	mongoose.Schema({
		title : String,
		text : String,
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Categories'
		}

	})
);
