// //Task 1
// var PASSWORD = "p@$$";
// do {
//   var enteredPassword = prompt("Enter the Password");
// } while (enteredPassword !== PASSWORD);

// // //Task 2
// var sum = 0;
// for (var even = 0; even <= 100; even += 2) {
//   sum += even;
// }
// console.log(sum);

// //Task 3
// var num1 = parseInt(prompt("Enter first Number:"));
// var operation = prompt("Enter operation to do");
// do {
//   var num2 = parseInt(prompt("Enter second Number:"));
// } while (!num2);

// switch (operation) {
//   case "+":
//     console.log(num1 + num2);
//     break;
//   case "-":
//     console.log(num1 - num2);
//     break;
//   case "*":
//     console.log(num1 * num2);
//     break;
//   case "/":
//     console.log(num1 / num2);
//     break;
// }

// //Task 4
// var USERNAME = "admin",
//   PASSWORD = "421$$";

// function isCorrect(username, password) {
//   if (username === USERNAME && password === PASSWORD) {
//     console.log("Welcome login success");
//   } else {
//     if (username !== USERNAME && password !== PASSWORD) {
//       throw new Error("Wrong username and password");
//     } else if (username !== USERNAME) {
//       throw new Error("Wrong username");
//     } else {
//       throw new Error("Wrong password");
//     }
//   }
// }

// try {
//   var username = prompt("Enter Username");
//   var password = prompt("Enter Password");
//   isCorrect(username, password);
// } catch (error) {
//   console.error(error);
// }

// //Task 5
// do {
//   var randomNumber = Math.floor(Math.random() * 10);
//   var enteredNumber = parseInt(prompt("Guess a number between 0 and 9"));

//   if (!isNaN(enteredNumber) || enteredNumber > 9 || enteredNumber < 0) {
//     continue;
//   }

//   if (randomNumber === enteredNumber) {
//     console.log("Correct Guess");
//     break;
//   } else {
//     console.log("try again");
//   }
// } while (true);

//Task 6
// function validateStr(dateStr = "") {
//   if (dateStr.length === 10) {
//     if (dateStr[2] === "-" && dateStr[5] === "-") {
//       return true;
//     }
//   } else {
//     return false;
//   }
// }

// function createDate(validator, dateStr) {
//   if (validator(dateStr)) {
//     return Date(dateStr);
//   }
//   return undefined;
// }

// var birthDateStr = prompt("Enter Your Birthdate in the format (DD-MM-YYYY)");

// var returnedDate = createDate(validateStr, birthDateStr);
// if (typeof returnedDate === "string") {
//   alert(returnedDate);
// } else {
//   alert("Wrong Date Format");
// }

// Task 6 clean way:
function isValidDateFormat(dateStr = "") {
  return dateStr.length === 10 && dateStr[2] === "-" && dateStr[5] === "-";
}

function createDateIfValid(dateStr) {
  if (isValidDateFormat(dateStr)) {
    return Date(dateStr);
  }
  return undefined;
}

const birthDateStr = prompt("Enter your birthdate in the format DD-MM-YYYY");

const result = createDateIfValid(birthDateStr);

if (typeof result === "string") {
  alert(result);
} else {
  alert("Wrong Date Format");
}

// // Task 7
// function dayName(dateStr) {
//   const weekday = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   var date = new Date(dateStr);
//   return weekday[date.getDay()];
// }

// var enteredDate = prompt("Enter a date");
// console.log(dayName(enteredDate));

// Task 8
// var countVowels = 0;
// var str = prompt("Enter a str");
// var vowels = "aeoui";
// var map = new Map();
// for (var i = 0; i < str.length; i++) {
//   if (vowels.indexOf(str[i]) !== -1) {
//     var lastValue = map.get(str[i]);
//     map.set(str[i], lastValue ? lastValue + 1 : 1);
//   }
// }

var countVowels = 0;
var str = prompt("Enter a str");
var vowelsArr = ["a", "e", "o", "u", "i"];
var countVowels = [0, 0, 0, 0, 0];

for (i = 0; i < str.length; i++) {
  if (vowelsArr.indexOf(str[i]) !== -1) {
    var charIdx = vowelsArr.indexOf(str[i]);
    countVowels[charIdx]++;
  }
}

for (let i = 0; i < 5; i++) {
  console.log(vowelsArr[i], " = ", countVowels[i]);
}
