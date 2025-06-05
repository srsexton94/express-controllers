const express = require("express");
const router = express.Router();
const catsCtrl = require("../controllers/cats");

// Our routes will go here

// GET /cats
router.get("/", catsCtrl.index);
router.get("/:id", catsCtrl.show);

module.exports = router;
