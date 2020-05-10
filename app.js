const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const homeRouter = require("./routes/homeRouter");
const taskRouter = require("./routes/task");
// const taskRouter2 = require("./routes/task2");
// const taskRouter3 = require("./routes/task3");
// const taskRouter4 = require("./routes/task4");
const errorRouter = require("./routes/error");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));

app.use(homeRouter);

// var ch = 1;
// switch (ch) {
//   case 1:
//     app.use(taskRouter.router1);
//     break;
//   case 2:
//     app.use(taskRouter);
//     break;
//   case 3:
//     app.use(taskRouter);
//     break;
//   case 4:
//     app.use(taskRouter);
//     break;
// // }
// task = Math.floor(Math.random() * 4);
// console.log(task);
// switch (task) {
//   case 0:
//     app.use(taskRouter1);
//     break;
//   case 1:
//     app.use(taskRouter3);
//     break;
//   case 2:
//     app.use(taskRouter3);
//     break;
//   case 3:
//     app.use(taskRouter4);
//     break;
// }
app.use(taskRouter);
app.use(errorRouter);
console.log("it has started!");

app.listen(1000);
