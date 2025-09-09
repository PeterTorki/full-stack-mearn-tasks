// var x = 10;
// var x = "mido";
// let x = 10;
// let x = 20;
// x = 20;
// var x;
// y = 30;
// let y;
// var x = 10;
// console.log(x);
// {
//   let x = 100;
//   console.log(x);
//   console.log(x);
// }
// console.log(x);

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//     console.log("------");
//   }, 100);
// }
// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 100);
// }
// const x = 10;
// x = 20;
//  const y;
// y=10;
// const obj = { name: "mido", age: 30 };
// obj.name = "ahmed";
// obj.age = 40;
// console.log(obj);
// const obj2 = {};
// obj2 = { name: "mido" };
// const arr = [1, 2, 3];
// arr.push(4);
// // console.log(arr);
// let str = "      hello      ";
// // console.log(str.padStart(15, "/"));
// // console.log(str.padEnd(15, "*"));
// console.log(str.trimStart());
// console.log(str.trimEnd());
// // console.log(str.trim());
// let name = "mido";
// let age = 30;
// let tec = "js";
// let info =
//   "my name is " + name + ' and i am" \n' + age + " years old and i love " + tec;
// console.log(info);
// let info2 = `my name is ${name} and i am"
//  ${age} years old and i love ${tec}`;
// console.log(info2);
// let num = 9999999999999999;
// console.log(num);
// let num2 = 9999999999999999n;
// console.log(num2);
// console.log(typeof num2);
// let num3 = 17n;
// console.log(num3 / 3n);
// let x = num3 + BigInt(5);
// console.log(x);
// let num = 10_000_00_55;
// console.log(num);
// console.log(typeof num);
// let num = null;
// console.log(num ?? "no value"); //null,undefined
// let num2 = []; //0,-0,"",false,null,undefined
// console.log(num2 || "no value");
// const obj = { invoice: {} };
// console.log(obj.invoice.user?.name); //{invoice:{user:{name:""}}}
// const arr = [1, 2, 3, 4];
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// let [a, b, c] = arr;
// let [d, , e] = arr;
// console.log(a, b, c);
// console.log(d, e);
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let [a, b, ...c] = arr;
// console.log(a, b, c);
// const obj = {
//   name: "mido",
//   age: 30,
//   tec: "js",
//   address: { city: "cairo", street: "new street" },
//   Childrens: ["adam", "asser", "aseel"],
// };
// // let { name, age, tec } = obj;
// let {
//   name: userName,
//   age: userAge,
//   tec: userTec,
//   address: { street },
//   address,
//   Childrens: [a, , b],
// } = obj;
// console.log(street, address, a, b);
// const people = [
//   {
//     name: "Mike Smith",
//     family: {
//       mother: "Jane Smith",
//       father: "Harry Smith",
//       sister: "Samantha Smith",
//     },
//     age: 35,
//   },
//   {
//     name: "Tom Jones",
//     family: {
//       mother: "Norah Jones",
//       father: "Richard Jones",
//       brother: "Howard Jones",
//     },
//     age: 25,
//   },
// ];

// for (const {
//   name: n,
//   family: { father: f },
// } of people) {
//   console.log("Name: " + n + ", Father: " + f);
// }
// let p2 = {
//   name: "Tom Jones",
//   family: {
//     mother: "Norah Jones",
//     father: "Richard Jones",
//     brother: "Howard Jones",
//   },
//   age: 25,
// };
// let data = Object.entries(p2);

// console.log(data);
// for (const [key, val] of data) {
//   console.log(`${key}: ${val}`);
// }
// // "Name: Mike Smith, Father: Harry Smith"
// // "Name: Tom Jones, Father: Richard Jones"
// let obj2 = Object.fromEntries(data);
// console.log(obj2);
let a = Symbol("id");
let b = Symbol("name");
console.log(a == b);
console.log(a === b);
let obj = { [a]: 100, [b]: "mido", age: 30 };

console.log(obj[a], obj[b], obj.age);
console.log(Object.keys(obj));
