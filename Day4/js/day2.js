// 1. Function Declaration (hoisted)
function sayHi() {
  console.log("Hi from function declaration!");
}
sayHi(); // Works anytime, even before declaration if called earlier in the code

// 2. Function Expression (not hoisted)
var sayHello = function () {
  console.log("Hi from function expression!");
};
sayHello(); // Works only after assignment

// 3. Arrow Function Expression (not hoisted)
const sayHey = () => {
  console.log("Hi from arrow function!");
};
sayHey();

// 4. Named Function Expression (not hoisted)
var namedFunc = function innerName() {
  console.log("Hi from named function expression!");
};
namedFunc();

// 5. Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("IIFE runs immediately!");
})();

// 6. Generator Function (hoisted)
function* genFunc() {
  yield "Generator yield 1";
  yield "Generator yield 2";
}
const gen = genFunc();
console.log(gen.next().value); // Generator yield 1
console.log(gen.next().value); // Generator yield 2

// 7. Async Function Declaration (hoisted)
async function asyncFunc() {
  return "Hello from async function";
}
asyncFunc().then(console.log);

// 8. Async Arrow Function (not hoisted)
const asyncArrow = async () => {
  return "Hello from async arrow function";
};
asyncArrow().then(console.log);
