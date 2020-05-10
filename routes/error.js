//This is the root path!
const path = require("path");
const rootDir = require("../utils/path");

//express routing
const express = require("express");
const router = express.Router();

router.use("/", (req, res, next) => {
  console.log("Error 404!");
  res.status("404");
  res.sendFile(path.join(rootDir, "views", "Error_404.html"));
});

module.exports = router;
