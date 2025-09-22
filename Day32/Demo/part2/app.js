// #1 EJS =>
// embedded js template ->
// template engine ->
// {varName} {{varName}} ->
// js code in html -> for loop , var , if
// #2 connect to DB -> (MonogDB)
// #3 AJV => package validation -> Zod (TS) , joi , yup

// setup express
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const userRouter = require("./src/routes/userRouter");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// /assets -> public
// app.use("/koko", express.static("public"));
app.use(express.static("public"));
app.set("view engine", "ejs"); // -> settings , config
app.set("views", "./pages");
// app.set("case sensitive routing", true); // -> /peter /Peter
// app.set("strict routing", true); // -> /peter  != /peter/
// app.set("json spaces", 2);
// {name} -> replace
// views | view -> file.ejs

// ODM -> mongoose -> Nodejs -> mapping -> document MongoDB
// #1 install & require
// #2 connect
console.log(process.env.MONGO);

// #3 create schema
// const userSchema = new mongoose.Schema({
//   User_ID: {
//     type: Number,
//     unique: true,
//     required: true,
//   },
//   Name: {
//     type: String,
//     required: true,
//     match: /^[a-zA-Z]*/,
//     maxLength: 10,
//   },
//   Age: {
//     type: Number,
//     max: 50,
//     min: 18,
//     required: true,
//   },
//   Country: {
//     type: String,
//     required: true,
//   },
//   Subscription_Type: {
//     type: String,
//     required: true,
//   },
//   Favorite_Genre: {
//     type: String,
//     enum: ["Action", "Drama"],
//   },
// });
// // #4 create model -> quries
// const User = new mongoose.model("users", userSchema);
// #5 connection
// const db = mongoose.connection;
// #6 on("error")
// db.on("error", (err) => {
//   console.log("err : ", err);
// });
// #7 once("open") -> {
// [endpoints]
// }
// db.once("open", () => {
//   console.log("db opend");

//   // get all users
//   app.get("/api/users", async (req, res) => {
//     const users = await User.find({});
//     // res.send("jjjjj");
//     res.json(users);
//   });

//   app.get("/", (req, res) => {
//     console.log("ll");
//     res.send("kkkk");
//   });

//   app.use((req, res) => {
//     console.log(req.params);
//     res.send("not found");
//   });
// });

// const schema = {
//   type: "object",
//   properties: {
//     User_ID: {
//       type: "number",
//     },
//     Name: {
//       type: "string",
//       pattern: "^[a-zA-Z]*$",
//       maxLength: 10,
//     },
//     Age: {
//       type: "number",
//       maximum: 50,
//       minimum: 18,
//     },
//     Country: {
//       type: "number",
//     },
//     Subscription_Type: {
//       type: "string",
//     },
//     Favorite_Genre: {
//       type: "string",
//       enum: ["Action", "Drama"],
//     },
//   },
//   required: [
//     "User_ID",
//     "Name",
//     "Age",
//     "Country",
//     "Subscription_Type",
//     "Favorite_Genre",
//   ],
//   additionalProperties: false,
// };
// const validate = ajv.compile(schema);

app.use("/api/users", userRouter);
app.use((req, res) => {
  console.log(req.params);
  res.send("not found");
});

// app.all("*ff", (req, res) => {
//   console.log(req.params);
//   res.send("not found");
// });

module.exports = app;

// Ajv => validation
// frontend -> ux , load
// backed -> db schema , server
