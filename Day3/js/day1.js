console.log("I'm Peter");

do {
  var fName = prompt("Enter your Name");
} while (!fName);

do {
  var age = prompt(`${fName} enter your age`);
} while (!age || isNaN(age - 0));

console.log(`${fName}, your age is ${age}`);

/*
	NaN doesn't equal NaN
	console.log(isNaN('hello'));      // true
	console.log(Number.isNaN('hello'));// false
*/

// parseInt("20px") => 20, parseInt can work even with string with chars but number should be at the first of string
// num.toFixed(n) => return string not a number
// [] and object are truthy values because it points on reference

function greet() {
  function sayMyName() {
    var nameToSay = "Peter";
  }
}

// console.log(nameToSay); gives error, var is functional scope

