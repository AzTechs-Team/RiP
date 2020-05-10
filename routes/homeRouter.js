//This is the root path!
const path = require("path");
const rootDir = require("../utils/path");

//express routing
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("on the home page!");
  res.sendFile(path.join(rootDir, "views", "home2.html"));
});

module.exports = router;
