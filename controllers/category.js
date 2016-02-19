'use strict';

const Category = require('../models/category');

// list categories action
module.exports.index = (req, res) =>
{
  Category.find({}, (err, categories) =>
  {
    console.log(categories);
    res.render("category-index", {"categories": categories});
  });

};

// create category action
module.exports.create = (req, res) =>
{
  Category.create(req.body, (err) =>
  {
    if(err) throw err;
    res.redirect("/categories");
  });
};

// send create form action
module.exports.newCategory = (req, res) =>
{
 res.render("category-new");
};

module.exports.show = (req, res) =>
{
 res.send("ahhhhhhhhhhhhhh");
};
