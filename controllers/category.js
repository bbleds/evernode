'use strict';
// controller for actions for a specific note

// list categories action
module.exports.index = (req, res) =>
{
 res.send("category-index")
}

// creat category action
module.exports.create = (req, res) =>
{
 res.send("bruh")
}

// send create form action
module.exports.newCategory = (req, res) =>
{
 res.render("category-new")
}
