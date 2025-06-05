const Cat = require("../models/cat");

function index(_req, res) {
  const cats = Cat.getAll();
  res.json(cats);
}

function show(req, res) {
  const cat = Cat.getOne(req.params.id);
  res.json(cat);
}

module.exports = {
  index,
  show,
};
