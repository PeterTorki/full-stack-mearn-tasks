const express = require("express");
const app = express();
const dotenv = require("dotenv").config("./.env");
const studentRouter = require("./routes/students.router");
const departmentRouter = require("./routes/departments.router");
const courseRouter = require("./routes/courses.router");
const enrollmentRouter = require("./routes/enrollment.router");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.set("view engine", "ejs"); // -> settings , config
app.set("views", "./pages");

app.use("/api/students", studentRouter);
app.use("/api/departments", departmentRouter);
app.use("/api/courses", courseRouter);
app.use("/api/enrollments", enrollmentRouter);

app.get("/", (req, res) => {
  res.json({ msg: "welcome to our api" });
});

app.use((req, res) => {
  res.send("Invalid Path");
});

module.exports = app;

// 3 models with relations
// crud for each model
