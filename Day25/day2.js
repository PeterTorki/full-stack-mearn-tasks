const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(
//   arr.filter(function (x) {
//     return x > 5;
//   })
// );
// console.log(arr.find((x) => x > 5));
// arr.forEach(function (x, i) {
//   console.log(x, "=>", i);
// });
// console.log(
//   arr.map(function (x) {
//     return x * 2;
//   })
// );
// console.log(arr.includes(5, 6));
// console.log(
//   arr.some(function (x) {
//     return x > 5;
//   })
// );
// console.log(
//   arr.every(function (x) {
//     return x > 5;
//   })
// );
// console.log(Array.from("hello"));
// console.log(
//   arr.reduce(function (acc, x) {
//     console.log(acc, x);

//     return acc + x;
//   }, 0)
// );
// const arr2 = [
//   [[1.1, 1.2], [2.1, 2.2]],
//   [3, 4],
//   [5, 6],
// ];
// console.log(arr2.flat(1));
// console.log(arr.join("-"));
// console.log(arr);
// const set = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
// let newarr = Array.from(set);
// console.log(newarr);
// set.add(6);
// set.add(3);
// console.log(set.has(6));
// set.delete(3);
// set.forEach(function (x) {
//   console.log(x);
// });

// console.log(set);
// const map = new Map();
// map.set("name", "mido");
// map.set("age", 100);
// console.log(map.get("age"));
// console.log(map.size);
// map.delete("age");
// map.forEach(function (v, k) {
//   console.log(k, "=>", v);
// });
// // console.log(map);
// function Person(x, y = 0) {
//   console.log(x + y);
// }
// Person(5);
// function grating(name, lname, massege = `hello ${name} ${lname}`) {
//   console.log(massege);
// }
// grating("mido", "ali");
// grating("mido", "ali", "hi");
// function dArr([a = 1, b = 2, ...c] = []) {
//   console.log(a + b);
//   console.log(c);
// }
// dArr();
// dArr([5, 6]);
// dArr([5]);
// dArr([11, 12, 13]);
// function dObj({ a = 1, b = 2 } = {}) {
//   console.log(a + b);
// }
// dObj();
// dObj({ a: 5, b: 6 });
// dObj({ a: 5 });
//dObj({ c: 11, d: 12 });
// console.log(1);
// console.log(1, 2);
// console.log(1, 2, 3);

// function any(...x) {
//   console.log(x);
// }
// any(1);
// any(1, 2);
// function fun1(x) {
//   console.log(x);
//   return function (y) {
//     console.log(x * y);
//   };
// }
// fun1(5)(6);
// let fun = (x) => x * 2;
// console.log(fun(5));
// const obj = {
//   a: 5,
//   b: function () {
//     console.log(this.a, this);
//   },
//   c() {
//     console.log(this.a, this);
//   },
//   d: () => {
//     console.log(this.a, this);
//   },
// };
// obj.b();
// obj.c();
// obj.d();
// let x = new fun(5);
// function* gen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// let generator = gen();
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next());
// function* gen() {
//   for (let i = 0; i < 3; i++) {
//     yield i;
//   }
// }
// let generator = gen();
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next());
// const obj = { name: "mido", age: 100, city: "cairo" };
//Object.freeze(obj); // prevent any modification to the object
// Object.seal(obj); // prevent adding or deleting properties, but allow modification of existing properties
// obj.age = 200;
// delete obj.age;
// console.log(obj);
// Object.defineProperty(obj, "country", {
//   value: "egypt",
//   writable: false,)

// setTimeout(function() {
//     console.log(i);
// }, 1000);
// function *gen(){
//     for (var i = 0; i < 3; i++) {
//         yield i;
//     }

// }
// const car = { make: "Honda", model: "Accord", year: 1998 };
// console.log("make" in car); // Expected output: true
var a = 1,
  b = 2; // ES5
var foo = { a: a, b: b }; // ES6
let foo = { a, b };
