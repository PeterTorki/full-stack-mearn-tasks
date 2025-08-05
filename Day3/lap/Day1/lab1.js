function task1() {
  var name = "John";
  console.log(name);
}

function task2() {
  var x = 10,
    y = 20;
  var sum = x + y;
  console.log(sum);
}

function task3() {
  var city;
  console.log(city);
  city = "Cairo";
  console.log(city);
}

function task4() {
  alert("Welcome to our website!");
}

function task5() {
  var response = confirm("Are you sure you want to delete this item?");
  console.log(response);
}

function task6() {
  var fName = prompt("Enter your First Name");
  var lName = prompt("Enter your Last Name");

  var fullName = fName + " " + lName;

  confirm(fullName);

  var birthDateStr = prompt("Enter Your Birthdate");
  var today = new Date();
  var birthDate = new Date(birthDateStr);
  dateDiff = today - birthDate;
  var age = Math.floor(dateDiff / (365.25 * 24 * 60 * 60 * 1000));

  console.log(age);
  alert("Welcome " + fullName + "you are " + age + "years old");
}

function task7() {
  alert(
    "it’s the first release of a calculator that only has a summation feature."
  );
  var num1Str = prompt("Enter First Number");
  var num2Str = prompt("Enter Second Number");

  var num1 = parseInt(num1Str),
    num2 = parseInt(num2Str);
  var sum = num1 + num2;

  prompt(num1 + " + " + num2 + " + " + sum);
}

function task8() {
  var salary = 40;
  console.log(typeof salary);
}

function task9() {
  var a = 5,
    b = 10;
  console.log("before ", "a: ", a, " b: ", b);
  a = a + b;
  b = a - b;
  a = a - b;
  console.log("after ", "a: ", a, " b: ", b);
}

task1();
