"use strict";

//routes for viewing individual notes, creating new notes

const express = require("express");
const router = express.Router();

const note = require("../controllers/note")

//route for getting create note form
router.get("/notes/new", note.newNote);

//route for viewing individual note
router.get("/notes/:id", note.show);

//route for deleting notes
router.delete("/notes/:id", note.destroy);

//route for making new notes
router.post("/notes", note.create);

//route for showing list of notes -> index action
router.get("/notes", note.index);

//render 'edit note' template
router.get("/notes/:id/edit", note.edit);

//update a note
router.put("/notes/:id", note.update)



module.exports = router;