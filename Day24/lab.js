// Task 1
const obj = {
  name: "peter",
  age: 15,
  address: {
    city: "New York",
    zip: "10001",
  },
};

for (const key in obj) {
  console.log(key, obj[key]);
}

// Task 2
const arr = [1, 2, 4, 66];
for (const key of arr) {
  console.log(key);
}

// Task 3
for (const key in arr) {
  console.log(key);
}

// Task 4
const arr1 = [1, 21, 3, 4, 5, "a"];
const [a, b, c, ...d] = arr1;
console.log(d);

// Task 5
const Std_name = "Peter",
  fac_name = "CS",
  Uni_name = "SCU",
  grad = 4;

console.log(`${Std_name} is a student in faculty of ${fac_name} in university ${Uni_name} And his final grad is ${grad}.
`);

// Task 6
const str = "heloo";
console.log(str.includes("e"));

// Task 7
let obj1;
obj1 = obj1 ?? { name: "Peter" };
console.log(obj1);

// Task 8
const data = {
  name: "Peter",
  age: 15,
  address: {
    street: "Elgish",
  },
};

console.log(data.address.city?.name);

// Task 9
const clonedObj = { ...obj };
clonedObj.name = "Anton";
clonedObj.age = 20;
console.log(obj);
console.log(clonedObj);

// Task 10
const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localization_tags: ["de-gen", "de-or"],
      last_edit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      titles: "JavaScript-Umgebung",
    },
  ],
};

const {
  title,
  translations: [{ locale, localization_tags, last_edit, url, titles }],
} = metadata;

console.log(title, locale, localization_tags, last_edit, url, titles);

// Task 11
const objArr = Object.entries(obj);
for (let arr of objArr) {
  const [key, value] = arr;
  console.log(`${key} its value is: ${value}`);
  arr[0] = key.toUpperCase();
}
const newObjFromArr = Object.fromEntries(objArr);
console.log(newObjFromArr);

// Task 12
let u = Symbol("username");
let p = Symbol("password");

const userObj = {
  name: "Peter",
  [u]: "peter_torki",
  [p]: "Pp1122Pp",
};

console.log(Object.keys(userObj));
