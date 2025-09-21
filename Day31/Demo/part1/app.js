// UMD -> import client & server
// environment -> Nodejs & env
// IIFE
// (function(module , require , __dirname , __filename , exports){})()

// if Node
// global
// module
// module.exports

// if browser
// windoe obj

// function api(){

// }

// const { myModule } = require("./modules/calc.module"); // return -> modules.exports || exports
// console.log(myModule.add(5, 6));

// code -> copy -> upadte

// install node -> node , npm , RPEL

// NPM -> node package manager
// registry -> DB js libraries opensourse
// command line
// library , module , package -> ( lab )
// publish UMD
// npm init -> package.json -> file info project - dependancies - devdependancies
// entry point -> start run
// package-lock.js -> dependancies -> exact version

// console.log(object);

// "^5.1.0";

// major [5] -> delete feature -> [backward incompatible]
// minor [1] -> new feature  -> [backward compatible]
// patch [0] -> fix bug - inhance performance -> [backward compatible]

// ~ [5.1.0] -> [5.1.1] [5.2.1] [6.0.0] -> [5.1.1]
// ^ [5.1.0] -> [5.1.1] [5.2.1] [6.0.0] -> [5.2.1]
// * [5.1.0] -> [5.1.1] [5.2.1] [6.0.0] -> [6.0.0]

// const moment = require("moment"); // core module
// 1-> core module
// 2-> local files
// 3-> node_modules
// 4-> parent dir
// console.log(moment().format("dddd"));
// console.log(new Date());

// npm i packageName -> local for project -> node_modules -> latest version
// npm i packageName -g -> globaly -> nodejs's node_modules
// npm i packageName@2.19.0
// ~2.19.0
// ^2.19.0
// *2.19.0
// npm update
// npm list
// npm list -g
// npm outdate

// devdependancies -> mocha [test]
// npm i packageName --save-dev

// EXPRESS
const express = require("express"); // function
const app = express();
let PORT = process.env.PORT || 5000;

const Students = [
  { name: "Ali", dept: "PD", id: 1 },
  { name: "Nour", dept: "SA", id: 2 },
  { name: "Mona", dept: "MD", id: 3 },
  { name: "Sara", dept: "SAP", id: 4 },
  { name: "Mostafa", dept: "EB", id: 5 },
  { name: "Ahmed", dept: "GD", id: 1 },
  { name: "Noha", dept: "GA", id: 2 },
];

// route || endpoint ?
app.get("/", (req, res) => {
  console.log("in / route");
  // res.write("hi");
  // res.end("hi");
  // res.set("set-cookie", ["name=omar;", "id=5;"]);
  // res.set({});
  res.send("<h1>this is / route</h1>");
});

// /api/students/
app.get("/api/students/", (req, res) => {
  res.send(Students);
});

// route parameter
// /api/students/id
app.get("/api/students/:id", (req, res) => {
  console.log(req.params); // return str
  // {id :val}
  const { id } = req.params;
  const std = Students.find((val, idx, arr) => {
    return val.id == id;
  });
  res.json(std);
});

//  /api/calc/:op/:num1/:num2
app.get("/api/calc/:op/:num1/:num2/", (req, res) => {
  // nums : [""]
  console.log(req.params);
  res.send("calc");
});

app.all("*not", (req, res) => {
  console.log(req.params);
  res.send("not Found");
});

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
