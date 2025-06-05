const dogs = [
  { id: 1, name: "Balto", breed: "Alaskan Husky" },
  { id: 2, name: "Beethoven", color: "Saint Bernard" },
  { id: 3, name: "Toto", breed: "Cairn Terrier" },
];

function getAll() {
  return dogs;
}

function getOne(id) {
  return dogs.find((dog) => dog.id === parseInt(id));
}

module.exports = {
  getAll,
  getOne,
};
