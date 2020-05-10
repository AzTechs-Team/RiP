//This is the root path!
const path = require("path");
const rootDir = require("../utils/path");

//express routing
const express = require("express");
const router = express.Router();

router.use("/random", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "task_1.html"));
});

module.exports = router;
