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
let PORT = process.env.PORT || 3000;

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

let name = "omar";
let obj = {
  name: "ali",
  age: 30,
};
let arr = [
  {
    name: "ali",
    age: 30,
  },
  {
    name: "khaled",
    age: 30,
  },
  {
    name: "abdo",
    age: 30,
  },
];
app.get("/", (req, res) => {
  //   res.send("Hello Mern");
  //   res.sendFile(path.join(__dirname, "./views/index.ejs"));
  res.render("index", { name, obj, arr });
});

// app.get("/peterjson", (req, res) => {
//   res.json(arr);
// });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
