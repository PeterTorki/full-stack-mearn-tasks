Task1;
var numStr = prompt("Enter a num");
var num = parseInt(numStr);

if (num === 0) {
  console.log("zero");
} else if (num > 0) {
  console.log("positive");
} else {
  console.log("negative");
}

Task2;
var proceed = confirm("Do you want to proceed?");
console.log(proceed ? "You chose to proceed" : "Action Canceled");

//Task 3
var num = 10;
console.log(num % 2 === 0 ? "hi" : "Heloo");

//Task 4
do {
  var age = parseInt(prompt("Enter your age"));

  if (age > 50) {
    console.log("Old");
  } else if (age >= 19 && age <= 50) {
    console.log("Grown up");
  } else if (age >= 11 && age <= 18) {
    console.log("Teenager");
  } else {
    console.log("Child");
  }
} while (
  age < 0 &&
  confirm("Age is not valid, Do you want to enter another age?")
);

//Task 5
var clock = parseInt(prompt("Enter current clock"));
if (clock <= 23 && clock > 12) {
  console.log(clock - 12, "PM");
} else {
  if (clock === 0) {
    console.log("12AM");
  } else {
    console.log(clock, "AM");
  }
}

//Task 6
var str = prompt("Enter a string");
str = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str);

//Task 7
var color = prompt("Enter you favorite color");
var isFavColor = confirm("You chose [", color, "]. is that correct?");
alert(isFavColor ? "Great choice!" : "Let's try again.");

//Task 8
var date1 = new Date("1/3/2002");
var date2 = new Date("2/3/2002");
console.log(date1 < date2);

//Task 9
var date1Str = prompt("Enter first date");
var date2Str = prompt("Enter Second date");
var date1 = new Date(date1Str);
var date2 = new Date(date2Str);
var diffDate = Math.abs(date1 - date2);
var days = diffDate / (1000 * 60 * 60 * 24);
console.log(Math.floor(days));

//Task 10
var str = "Hello World!";
console.log(str.substring(6, 11));

//Task 11
var num = 5.678;
console.log(num.toFixed(2));

//Task 12
var num = 15;
if (num % 3 === 0 && num % 5 === 0) {
  console.log(true);
} else {
  console.log(false);
}
