"use strict";

//routes for viewing individual notes, creating new notes

const express = require("express");
const router = express.Router();

// Note model
const Note = require("../models/Note");

//route for getting create note form
router.get("/notes/new", (req, res) =>
{
	res.render("new-note");
})

//route for viewing individual note
router.get("/notes/:id", (req, res) =>
{
	Note.findById(req.params.id, (err, note) =>
	{
		if (err) throw err
		res.render("show-note", {note: note});
	})
})

//route for making new notes
router.post("/notes", (req, res) =>
{
	Note.create(req.body, (err, note) =>
	{
		if (err) throw err
		console.log(note);
		res.redirect(`/notes/${note._id}`)
	})
})


module.exports = router;