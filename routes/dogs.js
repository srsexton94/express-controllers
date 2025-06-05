const express = require("express");
const router = express.Router();
const dogsCtrl = require("../controllers/dogs");

// Our routes will go here

// GET /cats
router.get("/", dogsCtrl.index);
router.get("/:id", dogsCtrl.show);

module.exports = router;
