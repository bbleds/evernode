"use strict";

// dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require('method-override');
const logger = require("./lib/logger")

// configuration
const PORT = process.env.PORT || 3000;
const MONGODB_URL = "mongodb://localhost:27017/evernode";
const note = require("./routes/note")
const categories = require("./routes/category");

// init app
const app = express();
//configure body parser
app.use(bodyParser.urlencoded(
	{
		extended: false
	}));

// use method override to accept post requests and convert to delete request when removing notes
app.use(methodOverride('_method'));

// use jade as view engine
app.set("view engine", "jade");

app.get("/", (req, res) =>
{
	res.send("<h1>Welcome to mah pagggggeeee</h1>");
})

app.use(logger);

app.use(note);
app.use(categories);

//connect to mongo
mongoose.connect(MONGODB_URL);

//when mongo is connected
mongoose.connection.on("open", () =>
{
	//Start app on specified port
	app.listen(PORT, () =>
	{
		console.log(`port running on port ${PORT}`);
		console.log(`Connected to mongodb`);
	})

})