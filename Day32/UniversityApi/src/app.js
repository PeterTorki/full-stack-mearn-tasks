const express = require("express");
const app = express();
const dotenv = require("dotenv").config("./.env");
const studentRouter = require("./routes/studentRouter");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.set("view engine", "ejs"); // -> settings , config
app.set("views", "./pages");

app.use("/api/students", studentRouter);

app.use((req, res) => {
  res.send("Invalid Path");
});
module.exports = app;
