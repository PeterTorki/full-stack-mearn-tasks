// var x = 20;
// if we have a variable in p1.js
// var y = 5
// and we override it in p2.js
// y = 10
// ES6 -> modularity -> type="module"
// each file has it's own scope
// export , import
// in NodeJs there is no window obj
// global = window
// in node js by default -> each is [module] -> [has it's own scope]
// console.log(global.x);

// main obj in js browser
// BOM -> [window] -> [screen - navigator - document - location - history]
// DOM -> [document]
// Built In -> [Array - Object - Error = String - Number - Boolean - Math - Date - Function - Regex .......]
// User Defined
//------>>>>>

// main module in NodeJs
// Golbal -> [global] -> dont need require
// Built In -> [os , fs , path , event , http , ..... ] -> require -> (core)
// Third Party -> [install] -> require
// User Defined -> [build] -> require

// global - module - exports - require - __direname , __filename - process -->>>> per module
// console.log(global);
// var x = 10;
// var y = 20;

// #1-> to share variable among modules -> we can add it to global obj
// global.appCode = "4554616464";
// reqiure -> import modules using it -> CommonJS
// ES6 -> what is the difference ? -> Module

// #2-> absoulte path of dir & file
// console.log(__dirname);
// console.log(__filename);

// #3-> module.exports + require
// #4-> require -> return value of module.exports
// let { number, number2 } = require("./script");
// console.log(number, number2);

// #5-> exports -> reference of module.exports -> [address] -> shortcut -> avoid using it
// let { number, number2 } = require("./script");
// console.log(number, number2);

// #6-> process -> module -> info - control over process -> direct use - require
// console.log(process);
// const greeting = require("./script");
// console.log(process.argv);
// 0-> node.exe -> REPL
// 1-> absoulte file path (process)
// 2-> argument
// let name = process.argv[2];
// console.log(greeting(name));
// process.env
// process.stdout.write("hello world");
// process.stdout.write("hello world"); // -> /n XX
// console.log("hello world");
// console.log("hello world");

// IIFE pattern -> internally
// (function (
//   global,
//   module,
//   exports,
//   require,
//   __direname,
//   __filename,
//   process
// ) {});
//------>>>>>

// built in core modules -> require

// rules for core modules -> naming convension - dont use var or let -> use const

// #1 -> [OS] -> info about OS
// const os = require("os");
// var os = 5;
// os = "ali";
// console.log(os.type()); // -> os type
// console.log(os.platform()); // -> os plateform
// console.log(os.arch()); // x64 (x32)
// console.log(os.hostname()); // computer hostname
// console.log(os.machine());
// console.log(os.version());
// console.log(os.release());
// console.log(os.freemem()); // free memory
// console.log(os.totalmem()); // total memory

// #2 -> [PATH] -> to work with files and dirs path
// const path = require("path");
// console.log(path.isAbsolute(__dirname));
// absolute path -> full address of ur home -> root of the system to the file -> it doesnt depend on where you run nodejs
// relative path -> from the current working dir
// let relativePathFolder = "./folder/greeting.js"; // -> relative
// let absolutePathFolder = path.join(__dirname, relativePathFolder); // -> absolute
// join -> any number of string arguments -> return single path
// console.log(absolutePathFolder);
// console.log(path.extname(absolutePathFolder));
// console.log(path.basename(absolutePathFolder)); // -> the final part of path string
// console.log(path.parse(absolutePathFolder)); // -> obj of path element
// console.log(path.dirname(absolutePathFolder));
// console.log(__filename);
// console.log(path.join(__dirname, path.basename(__filename)));

// #3 -> [FS] -> ability - control to work with your computer file system
// const fs = require("fs");
// console.log(fs);
// fun with sync word -> async -> u should put cb -> without cb it will throw error
// cb fun -> in node is error first param
// sync fun -> return data -> var data

// console.log("object1");

// fs.readFile("file.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("there is an error");
//   } else {
//     // console.log(data.toString());
//     console.log(data);
//   }
// }); // -> async
// const data = fs.readFileSync("file.txt", "utf-8");
// console.log(data);
// the output in buffer data -> bc file stored in zeros & ones form
// 1 -> toString()
// 2 -> encode buffer param -> [second param]
// console.log("object2");

// fs.writeFile("file.txt", "what is your name", (err) => {
//   if (err) {
//     console.log("there is an error");
//   } else {
//     console.log("DONE...!");
//   }
// }); // -> async
// const data = fs.writeFileSync("file.txt", "my name is abdo"); // -> sync
// write -> always override on file

// create file
// const data = fs.writeFileSync("file2.txt", "my name is abdo"); // -> write in not existing file
// fs.open("file3.txt", "w", (err) => {
//   if (err) {
//     console.log("there is an error", err);
//   } else {
//     console.log("DONE...!");
//   }
// }); -> w
// r - read
// w - write
// a - append

// fs.appendFile("file.txt", "what is your name", (err) => {
//   if (err) {
//     console.log("there is an error");
//   } else {
//     console.log("DONE...!");
//   }
// }); // -> async
// const data = fs.appendFileSync("file.txt", "my name is abdo"); // -> sync

// fs.unlink("file2.txt", (err) => {
//   if (err) {
//     console.log("there is an error");
//   } else {
//     console.log("DONE...!");
//   }
// }); // -> async
// const data = fs.unlinkSync("file3.txt"); // -> sync

// FILE STREAM -> chunk of data
// for (let index = 0; index < 1000; index++) {
//   const data = fs.appendFileSync("file.txt", "my name is abdo "); // -> sync
// }
// 1kb -> 1024 byte
// 63kb -> 63 * 1024
// const readStream = fs.createReadStream("file.txt", {
//   encoding: "utf-8",
//   start: 0,
//   end: 10,
//   highWaterMark: 5 * 1024,
// });
// readStream.on("data", (chunk) => {
//   console.log(chunk.length);
// });
// readStream.on("error", (err) => {
//   console.log(err);
// });
// readStream.on("close", () => {
//   console.log("closed");
// });
// readStream.on("open", () => {
//   console.log("opened");
// });
// readStream.on("end", () => {
//   console.log("end of the file");
// });
// const writeStream = fs.createWriteStream("file2.txt", {
//   encoding: "utf-8",
//   highWaterMark: 5,
// });
// writeStream.write("hi");
// writeStream.end("ddd");

// readStream.pipe(writeStream);

// #4 -> [events]
// two types of event
// #1 -> system events -> events handled by machine itself (like previous events in file system)
// #2 -> custom events -> events created using event core module
// const EventEmitter = require("events"); // -> return class
// let event = new EventEmitter();
// register
// event.once("xyz", () => {
//   console.log("this is register 1");
// });
// event.on("xyz", () => {
//   console.log("this is register 2");
// });
// const fun = () => {
//   console.log("this is register 3");
// };
// event.on("xyz", fun);
// // -> run on fire -> sync
// // fire
// event.emit("xyz");
// console.log("/////////////////");
// event.emit("xyz");
// console.log("/////////////////");
// setTimeout(() => {
//   event.off("xyz", fun);
//   event.emit("xyz");
// }, 3000);

// #5 -> [http]
// core module responsible for creating server
// web server -> services -> request , response
// const http = require("http");
// const server = http.createServer();
// server.listen(3000, () => {
//   console.log("http://localhost:3000");
// });
// // 0 -> 1023 -> reserved ports
// server.on("request", (req, res) => {
//   console.log(req);
//   console.log(res);
// });
// chaining
// http
//   .createServer((req, res) => {
//     console.log(req.url);
//     // console.log(res);
// console.log(req.method);
// res.write("hello")
// res.end()
//   })
//   .listen(3000, () => {
//     console.log("http://localhost:3000");
//   });
