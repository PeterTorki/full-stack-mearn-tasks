const { createArray, random } = require("../lab1");

// Task1: Create Array
describe("Test createArray function", () => {
  // Test 1
  it("Test that the return value of type array", () => {
    // To fail Cases:
    // overriddenCreateArray = (length) => {Array.from(Array(length).keys())}; -> return object no an array
    // expect(overriddenCreateArray(5)).toEqual(jasmine.any(Array));

    // Sol:
    expect(createArray(5)).toEqual(jasmine.any(Array));
  });

  // Test 2
  it("Test if we pass 2 it will return array of length 2 and test it includes 1", () => {
    const arr = createArray(2);

    // To fail cases:
    // arr.filter((x) => x === 1); // -> decrease arr length and remove the num 1

    // Sol:
    expect(arr.length).toBe(2);
    expect(arr.includes(1)).toBe(true);
  });

  // Test 3
  it("Test if we pass 3 it will return array of length 3 and test it doesn't include 3", () => {
    const arr = createArray(3);
    // To fail cases:
    // arr.push(3); // -> increase arr length, add num 3

    // Sol:
    expect(arr.length).toBe(3);
    expect(arr.includes(3)).toBe(false);
  });

  // Test 4: bonus
  it("Test if array starts with 0 and ends with length - 1", () => {
    const arr = createArray(3);
    // To fail cases:
    // arr.unshift(-1); // -> fail that it not start with 0
    // arr.push(88); // -> fail that it not end with (length - 1)

    // Sol:
    expect(arr[0]).toBe(0);
    expect(arr[arr.length - 1]).toBe(arr.length - 1);
  });
});

// Task 2: random
describe("Test random function", () => {
  // Test 1:
  it("Test that the return value is a number", () => {
    // To fail cases:
    // overriddenRandom = (min, max) => `${Math.floor(Math.random() * (max - min + 1)) + min}`; // -> return string not number
    // expect(overriddenRandom(5, 10)).toEqual(jasmine.any(Number));

    // Sol
    expect(random(5, 10)).toEqual(jasmine.any(Number));
  });

  // Test 2:
  it("Test if we pass 5,7 it will return a number >= 5 and <= 7", () => {
    const num = random(5, 7);

    // Sol:
    expect(num).toBeGreaterThanOrEqual(5);
    expect(num).toBeLessThanOrEqual(7);
  });

  // Test 3:
  it("Test if we pass one parameter it will return NaNs", () => {
    expect(random(4)).toBeNaN();
  });

  // Test 4: Bonus
  it("Test if we pass no parameter", () => {
    expect(random()).toBeNaN();
  });

  // Test 5: Bonus
  it("Test if min > min", () => {
    const num = random(7, 5);

    expect(num).toBeGreaterThanOrEqual(5);
    expect(num).toBeLessThanOrEqual(7);
  });

  // Test 5: Bonus
  it("Test if a is a string and b is a number", () => {
    expect(random("aaa", 5)).toBe("NaNaaa");
  });
  // Test 6: Bonus
  it("Test if a = b", () => {
    expect(random(5, 5)).toBe(5);
  });
});
