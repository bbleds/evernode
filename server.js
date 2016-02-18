"use strict";

// dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

// init app
const app = express();

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
	console.log(req.body);
	res.redirect("/")
})

app.listen(PORT, () =>
{
	console.log(`app listening on port: ${PORT}`);
})