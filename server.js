"use strict";

// dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const MONGODB_URL = "mongodb://localhost:27017/evernode"

// init app
const app = express();

const Note = mongoose.model('Notes', mongoose.Schema({
	title : String,
	text : String
}));

//configure body parser
app.use(bodyParser.urlencoded(
	{
		extended: false
	}));

// use jade as view engine
app.set("view engine", "jade");

app.get("/", (req, res) =>
{
	res.send("<h1>Welcome to mah pagggggeeee</h1>");
})

//route for getting create note form
app.get("/notes/new", (req, res) =>
{
	res.render("new-note");
})

//route for making new notes
app.post("/notes", (req, res) =>
{
	Note.create(req.body, (err, note) =>
	{
		if (err) throw err
		console.log(note);
		res.redirect("/")
	})
})

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