// Task 1
let num: number = 24;
let str: string = "Peter";
let bool: boolean = true;
let arr: number[] = [1, 2, 3];

console.log(num, str, bool, arr);

// Task 2

type mixed = string | number;
const printArrayElements = (arr: mixed[]): void => {
  arr.forEach((ele: mixed): void => console.log(`${ele} of type ${typeof ele}`));
};

let mixed: mixed[] = [1, "a", 2, "b", "c"];

printArrayElements(mixed);

// Task 3

enum trafficLight {
  Red = "Stop",
  Yellow = "Get Ready",
  Green = "Go",
}

const getAction = (light: trafficLight): string => {
  return light;
};

console.log(getAction(trafficLight.Red));

// Task 4
enum Role {
  Admin = "Admin",
  User = "User",
  Guest = "Guest",
}

type User = [number, string, Role];

let user: User = [1, "Peter", Role.Admin];
console.log(user);

const describeUser = (user: User): void => {
  console.log(user[2]);
};

describeUser(user);

// Task 5
const upperize = (str: mixed): string => {
  if (typeof str === "string") {
    return str as Uppercase<string>;
  } else if (typeof str === "number") {
    return `$${str}`;
  } else {
    throw new Error("Not a number or a string");
  }
};

console.log(upperize(0));

// Task 6
let input: unknown = "hello";

function processInput(value: unknown): mixed | undefined {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * value;
  }
  return undefined;
}

console.log(processInput(input));

input = 7;
console.log(processInput(input));

input = true;
console.log(processInput(input));
