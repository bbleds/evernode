"use strict";

//routes for viewing individual notes, creating new notes

const express = require("express");
const router = express.Router();
const categoryCtrl = require("../controllers/category.js");

//route for getting create new category form
router.get("/categories/new", categoryCtrl.newCategory);

//route for making new categories
router.post("/categories", categoryCtrl.create);

//route for showing list of categories -> index action
router.get("/categories", categoryCtrl.index);

//route for showing an individual category -> index action
router.get("/categories/:id", categoryCtrl.show);




module.exports = router;
