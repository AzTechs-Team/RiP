//This is the root path!
const path = require("path");
const rootDir = require("../utils/path");

//express routing
const express = require("express");
const router = express.Router();

// router.use("/random", (req, res, next) => {
//   res.sendFile(path.join(rootDir, "views", "task.html"));
// });

router.use("/random", (req, res, next) => {
  const task = Math.floor(Math.random() * 4);
  console.log(task);
  res.sendFile(path.join(rootDir, "views", `task_${task}.html`));
});

module.exports = router;
