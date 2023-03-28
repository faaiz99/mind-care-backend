const express = require("express");
const router = express.Router();

// Home page route.
router.get("/", function (req, res) {
  res.send("Therapist home page");
});

// About page route.
router.get("/profile", function (req, res) {
  res.send("About this therapist");
});

module.exports = router;