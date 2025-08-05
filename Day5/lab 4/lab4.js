// // Task 1
// var car = {
//   brand: "BMW",
//   model: "X5",
//   year: 2020,
//   printDetails: function () {
//     console.log(
//       "Car Details: " + this.brand + " " + this.model + ", Year: " + this.year
//     );
//   },
// };

// // Task 2
// for (var key in car) {
//   console.log(key + ": " + car[key]);
// }

// // Task 3
// function swapKeysAndValues(obj) {
//   var swapped = {};
//   for (var key in obj) {
//     var value = obj[key];
//     swapped[value] = key;
//   }
// }

// // Task 4
// var person = {
//   name: "Peter",
//   age: 23,
//   martialStatus: "Single",
//   address: {
//     street: "Street No. 7",
//     city: "Al-Qantara",
//   },
//   printDetails: function () {
//     console.log("name: ", this.name);
//     console.log("age: ", this.age);
//     console.log("martialStatus: ", this.martialStatus);
//     console.log("address street ", this.address.city);
//     console.log("address city ", this.address.street);
//   },
// };

// // Task 5
// var people = [
//   {
//     name: "Peter",
//     age: 23,
//   },
//   {
//     name: "Joseph",
//     age: 53,
//   },
//   {
//     name: "Anton",
//     age: 20,
//   },
//   {
//     name: "Mina",
//     age: 24,
//   },
// ];
// var sortedPeople = people.sort(function (a, b) {
//   return a.age - b.age;
// });

// // Task 6
// function findMaxValue(arr) {
//   var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   var min = Infinity,
//     max = -Infinity;

//   arr.forEach(function (num) {
//     if (num < min) {
//       min = num;
//     }
//     if (num > max) {
//       max = num;
//     }
//   });

//   return {
//     min,
//     max,
//   };
// }

// // Task 7
// function reverseString(str) {
//   var reversed = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// // Task 8
// var products = [
//   {
//     name: "Laptop",
//     price: 1000,
//     quantity: 5,
//   },
//   {
//     name: "Phone",
//     price: 500,
//     quantity: 10,
//   },
//   {
//     name: "Tablet",
//     price: 300,
//     quantity: 8,
//   },
// ];

// var productsWithDiscount = products.map(function (product) {
//   return {
//     name: product.name,
//     price: product.price,
//     quantity: product.quantity,
//     discountedPrice: product.price * 0.9,
//   };
// });

// // Task 9
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

// // Task 10
// var strArray1 = prompt("Enter numbers separated by ','").split(",");
// var strArray2 = prompt("Enter numbers separated by ','").split(",");

// var arr1 = strArray1.map((str) => Number(str));
// var arr2 = strArray2.map((str) => Number(str));

// var arr3 = arr1.concat(arr2);

// console.log(arr3);

// Task 11
// var contacts = [];
// do {
//   var operation = prompt(
//     "Choose operation:\n1- Add contact\n2-SearchContact\n3-exit"
//   );
//   if (operation === "exit") break;

//   switch (operation) {
//     case "add":
//       var personName = prompt("Enter Name");
//       var phoneNumber = prompt("Enter phone number");
//       var contactObj = {
//         name: personName,
//         phoneNumber,
//       };
//       contacts.push(contactObj);
//       break;
//     case "search":
//       var searchTerm = prompt("Enter name or phone number to search");
//       var result = contacts.find(
//         (obj) => obj.phoneNumber === searchTerm || obj.name === searchTerm
//       );
//       console.log(result);
//       break;
//   }
// } while (operation !== "exit");

// Task 12
var obj1 = {
  a: 1,
  b: 2,
};

var obj2 = {
  b: 3,
  c: 4,
};

var mergedObj = {};

for (var key in obj1) {
  if (obj2[key]) {
    var key1Duplicated = key + "_1";
    mergedObj[key1Duplicated] = obj1[key];
  } else {
    mergedObj[key] = obj1[key];
  }
}

for (var key in obj2) {
  mergedObj[key] = obj2[key];
}

console.log(mergedObj);
