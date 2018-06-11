const express = require("express");
const router = express.Router();
const path = require('path');

router.get("/", function(req, res) {
  res.render('main');
});

router.get("/dashboard", function(req, res) {
  res.render('main');
});


module.exports = router;
