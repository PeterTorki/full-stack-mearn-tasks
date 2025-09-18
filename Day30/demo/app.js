// Event
// custom module (user defined)
// http (simulate live server)

// const EventEmitter = require("events");
// const myEvent = new EventEmitter();

// // register
// myEvent.once("xyz", () => {
//   console.log("event 1 is here");
// });
// myEvent.on("xyz", () => {
//   console.log("event 2 is here");
// });
// const fun = () => {
//   console.log("event 3 is here");
// };
// myEvent.on("xyz", fun);

// // fire (despatch)
// myEvent.emit("xyz");
// console.log("////////////////");
// myEvent.emit("xyz");
// console.log("////////////////");
// setTimeout(() => {
//   myEvent.off("xyz", fun);
//   myEvent.emit("xyz");
// }, 1000);

// class MyEventClass extends EventEmitter {
//   method1() {}
//   method2() {}
//   method3() {}
//   method4() {}
//   method5() {}
// }
// const ll = new MyEventClass();

// [global - process] - [module - exports - __dirname , __filename , require]
// IIFE pattern
// (function(module - exports - __dirname , __filename , require){
//     //code
// })() // internally node -> per module
// per process

// global.appCode = "645654";
// console.log("jfjfjfjfj");

// const { Calc } = require("./calc.module");
// require("./calc.module");
// require("./calc.module");
// console.log(require("./calc.module"));
// console.log(add(5, 5));
// console.log(gg);
// const k = new Calc()



