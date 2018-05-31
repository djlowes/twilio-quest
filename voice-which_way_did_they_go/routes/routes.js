const express = require("express");
const router = express.Router();
const path = require('path');

router.get("/", function(req, res) {
  res.render('home');
});

router.get("/participants", function(req, res) {
  res.render('home');
});


module.exports = router;
