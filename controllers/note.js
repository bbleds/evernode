'use strict';
// controller for actions for a specific note

// note model
const Note = require("../models/Note");

// method for new note form
module.exports.newNote = (req, res) =>
{
	res.render("new-note");
}

// method for viewing individual note
module.exports.show = (req, res) =>
{
	Note.findById(req.params.id, (err, note) =>
	{
		if (err) throw err
		res.render("show-note", {note: note});
	})
}

// method for for making new notes
module.exports.create = (req, res) =>
{
	Note.create(req.body, (err, note) =>
	{
		if (err) throw err
		console.log(note);
		res.redirect(`/notes/${note._id}`)
	})
}

// method for deleting notes
module.exports.destroy = (req, res) =>
{
	Note.findByIdAndRemove(req.params.id, (err) =>
	{
		if (err) throw err
		res.redirect("/");
	})

}