const arrPaths = [];
arrPaths[0] = "/views/awkward.html";
arrPaths[1] = "/views/fortune-cookies.html";
arrPaths[2] = "/views/cats.html";
arrPaths[3] = "/views/task_3.html";
arrPaths[4] = "/views/quiz.html";
arrPaths[5] = "/views/task5.html";

const path = require("path");
const rootDir = require("../utils/path");

const express = require("express");
const router = express.Router();

router.get("/random", (req, res) => {
  var chosenPath = arrPaths[Math.floor(Math.random() * arrPaths.length)];
  console.log(chosenPath);
  res.sendFile(path.join(rootDir + chosenPath));
});

module.exports = router;
