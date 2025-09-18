// let num: number = 5;
// //num = "fjfj"; // Error: Type 'string' is not assignable to type 'number'.
// let num2: number = 0xfff; // Hexadecimal
// let num3: number = 0b1010; // Binary
// let num4: number = 0o744; // Octal
// console.log(num, num2, num3, num4);
// let str: string = "Hello, TypeScript!";
// str.toLowerCase();
// let bool: boolean = true;
// let bool1 = new Boolean(true);
// console.log(typeof bool1);
// let arrnum: number[] = [1, 2, 3];
// let arrstr: Array<string> = ["a", "b", "c"];
// let arrmix: (number | string)[] = [1, "a", 2, "b"];

//let obj: object = { a: 1, b: 2 };
// let obj: { a: number; b: number } = { a: 1, b: 2 };
// console.log(obj.a);
// let arrdats: [string, number] = ["a", 1];
// console.log(arrdats[0]);
// let arrdata: [string, number][] = [["a", 1], ["b", 2], ["c", 3]];
// console.log(arrdata[0][0]);
// enum Color {
//   Red,
//   //Green = "GREEN",
//   Green = 6,
//   Blue,
// }
// let c: Color = Color.Green;
// console.log(c);
// let data:(string|number)=200;
// data="Hello";
// let data: any = 200;
// // data = "Hello";
// // data = true;
// //console.log(data.toUpperCase());//javascript error
// let data2: unknown = 200;
// data2 = "Hello";
// // data2 = true;
// if (typeof data2 === "string") {
//   console.log(data2.toUpperCase());
// }
// let x;
// x = 5;
// console.log(typeof x);
// type person = {
//   name: string;
//   age: number;
// };
// let p1: person = { name: "John", age: 30 };
// let p2: person = { name: "Jane", age: 25 };
// type done = 200 | "ok";
// let d: done = 200;
// d = "ok";
//d = "hello"; // Error: Type '"hello"' is not assignable to type 'done'.
//---------------functions----------------
// function sum(a: number, b: number): number {
//   return a + b;
// }
// console.log(sum(5, 10));
// //console.log(sum(5, "10")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// function sum2(a: number, b?: number, c?: number): number {
//   // return a + (b || 0) + (c || 0);
//   //or
//   return a + (b ?? 0) + (c ?? 0);
// }
// sum2(5, 10);
// function add (a:number,b:number,...data:number[])
// {

// }
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: any, b: any): any {
//   return a + b;
// }
// add(10, 20);
// add("10", "20");
//add(10, "20"); // Error: No overload matches this call.
