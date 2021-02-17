const router = require("express").Router();

const { Router } = require("express");

router.get("/api/notes", (req, res) => {
  fs.readFile("db.json", "JSON", data);
});

module.exports = router;
