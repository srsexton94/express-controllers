const Dog = require("../models/dog");

function index(_req, res) {
  const dogs = Dog.getAll();
  res.json(dogs);
}

function show(req, res) {
  const dog = Dog.getOne(req.params.id);
  res.json(dog);
}

module.exports = {
  index,
  show,
};
