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
// const express = require("express"); // function
// const path = require("path");
// const bodyParser = require("body-parser");
// const app = express();
// let PORT = process.env.PORT || 5000;
// console.log(bodyParser);

// middleware

// app.use(express.urlencoded({ extended: true })); // buit in
// app.use(express.json()); // built in

// app.use("/peter", (req, res, nxt) => {
//   console.log(req.url);
//   res.send("ay 7aga use");
//   // nxt();
// });

// app.all("/peter/m", (req, res) => {
//   console.log(req.url);
//   res.send("ay 7aga");
// });

// app.param("id", (req, res, nxt, id) => {
//   req.user = id;
//   nxt();
// });

// const Students = [
//   { name: "Ali", dept: "PD", id: 1 },
//   { name: "Nour", dept: "SA", id: 2 },
//   { name: "Mona", dept: "MD", id: 3 },
//   { name: "Sara", dept: "SAP", id: 4 },
//   { name: "Mostafa", dept: "EB", id: 5 },
//   { name: "Ahmed", dept: "GD", id: 1 },
//   { name: "Noha", dept: "GA", id: 2 },
// ];

// error handle
// param middleware
// custom middleware
// theird party -> helmet ....

// const fun = (req, res, nxt) => {
//   console.log("/ middlware");
//   req.name = "ibrahim";
//   nxt();
// };

// app.get(
//   "/",
//   (req, res, nxt) => {
//     console.log("/ middlware");
//     req.name = "ibrahim";
//     nxt();
//   },
//   fun,
//   (req, res, next) => {
//     console.log("end / ");
//     console.log(req.name);
//     // res.send("jjjjj");
//     next();
//   }
// );

// route handler middleware
// route || endpoint ?
// app.get("/", (req, res) => {
//   // console.log("in / route");
//   // res.write("hi");
//   // res.end("hi");
//   // res.set("set-cookie", ["name=omar;", "id=5;"]);
//   // res.set({});
//   let relative = "./client/pages/index.html";
//   let absolute = path.join(__dirname, relative);
//   console.log(absolute);
//   // res.sendFile("./client/pages/index.html"); // poth -> absolute path
//   res.sendFile(absolute); // poth -> absolute path
//   // res.send("kjjj");
// });
// app.get("/welcome.html", (req, res) => {
//   console.log(req.body);
//   res.sendFile(path.join(__dirname, "./client/pages/welcome.html"));
// });
// app.post("/welcome.html", (req, res) => {
//   console.log(req.body);
//   res.sendFile(path.join(__dirname, "./client/pages/welcome.html"));
// });
// urlencoded
// ajax json
// app.get("/styles/main.css", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/styles/main.css"));
// });
// app.get("/script/scrept.js", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/script/scrept.js"));
// });
// app.get("/images/2.jpg", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/images/2.jpg"));
// });
// app.get("/favicon.ico", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/icons/favicon.ico"));
// });

// /api/students/
// app.get("/api/students/", (req, res) => {
//   res.send(Students);
// });

// route parameter
// /api/students/id
// app.get("/api/students/:id", (req, res) => {
//   // console.log(req.params); // return str
//   // {id :val}
//   // const { id } = req.params;

//   const std = Students.find((val, idx, arr) => {
//     return val.id == req.user;
//   });
//   res.json(std);
// });

//  /api/calc/:op/:num1/:num2
// app.get("/api/calc/:op/:num1/:num2/", (req, res) => {
//   // nums : [""]
//   console.log(req.params);
//   res.send("calc");
// });

// app.all("*not", (req, res) => {
//   console.log(req.params);
//   res.send("not Found");
// });

// app.listen(PORT, () => {
//   console.log("http://localhost:" + PORT);
// });
