"use strict";

// dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

// init app
const app = express();

app.get("/", (req, res) =>
{
	res.send("<h1>Welcome to mah pagggggeeee</h1>");
})

app.listen(PORT, () =>
{
	console.log(`app listening on port: ${PORT}`);
})