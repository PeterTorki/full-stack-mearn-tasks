// Task 1
const namesSet = new Set(["a", "v", "a"]);
console.log(namesSet);
namesSet.add("v");
console.log(namesSet);

console.log(...namesSet);

for (const e of namesSet) {
  console.log(e);
}

// Task 2
const studentsMap = new Map();
studentsMap.set("Peter", [
  { Coursename: "JavaScript", Grade: "Excellent" },
  { Coursename: "Jquery", Grade: "Good" },
  { Coursename: "CSS", Grade: "V.Good" },
]);

studentsMap.set("Anton", [
  { Coursename: "JavaScript", Grade: "Excellent" },
  { Coursename: "Jquery", Grade: "Good" },
  { Coursename: "CSS", Grade: "V.Good" },
]);
studentsMap.set("Martina", [
  { Coursename: "JavaScript", Grade: "Excellent" },
  { Coursename: "Jquery", Grade: "Good" },
  { Coursename: "CSS", Grade: "V.Good" },
]);

for (const [student, courses] of studentsMap) {
  console.log(`Courses of ${student}: `, courses);
}

// Task 3
let nums = [1, 5, 3, 4, 2, 4, 6, 8, 5];
nums.filter((num) => num % 2).forEach((num) => console.log(num));

nums.filter((num) => num % 2 === 0).forEach((num) => console.log(num));

console.log(
  "first number > 5: ",
  nums.find((num) => num > 5)
);

nums.map((num) => num * 2).forEach((num) => console.log(num));

// Task 4, 5: task4.js

// Task 6
// const reverseString = (str) => {
//   return Array.from(str).reduceRight((acc, cur) => acc + cur, "");
// };
const reverseString = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverseString("Peter"));

const courseInfoGenerate = ({
  courseName = "ES6",
  courseDuration = "3days",
  courseOwner = "JavaScript",
  ...rest
} = {}) => {	
  if (Object.keys(rest).length !== 0) {
    throw new Error("Wrong passed props");
  }
  return {
    cName: courseName,
    cDuration: courseDuration,
    cOwner: courseOwner,
    // ...rest,
  };
};

console.log(courseInfoGenerate({ courseName: "Peter" }));
// console.log(courseInfoGenerate({ days: 5 }));

// Task 8
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

console.log(fruits.every((fruit) => typeof fruit === "string"));

console.log(fruits.some((fruit) => typeof fruit === "string"));

fruits.filter((fruit) => fruit.startsWith("b") || fruit.startsWith("s")).forEach((fruit) => console.log(fruit));
