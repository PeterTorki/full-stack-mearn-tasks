const { sum, stringReverse, removeDuplicate } = require("../index.js");

//suite

// describe("here i test sum function",function(){

//     it('Test if the parameters are numbers,should return sumtion correctly',()=>{
//         expect(sum(5,6)).toBe(11)

//     })

//     it('Test if the parameters are numbers,should return sumtion correctly1',()=>{

//         expect(sum(5,6)).toBeGreaterThan(10)
//     })

//     it('Test if the params are negative numbers ,should return negative number',()=>{
//         expect(sum(-3,-2)).toBe(-5)
//     })

//     it('Test if the params are negative numbers ,should return negative number 2',()=>{
//         expect(sum(-3,-2)).toBeLessThanOrEqual(-5)
//     })

//     it('Test if params are string , should return error',()=>{
//         expect(function(){sum('Ali','Ahmed')}).toThrow()
//     })

// })

// describe(" Test stringReverse function",function(){

//     it(' Test that the function return a reverse string',()=>{

//         expect(stringReverse('ali')).toBe('ila')
//     })

//     it(' Test that the function return a string',()=>{

//         expect(typeof stringReverse('Ahmed')).toBe('string')
//     })

//     it('Test the function return string',()=>{
//         expect(stringReverse('Ahmed')).toEqual(jasmine.any(String))
//     })
// })

describe("Test on removeDuplicate Function", function () {
  it("Test That the function remove any duplicates ", () => {
    expect(removeDuplicate([1, 2, 2, 3, 3, 4, 5, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("Test That the function returns array ", () => {
    expect(removeDuplicate([1, 2, 2, 3, 4])).toEqual(jasmine.any(Array));
  });

  it(" Test on array size ", () => {
    expect(removeDuplicate([1, 1, 2, 3, 4])).toHaveSize(4);
  });

  it("test when the function remove Duplicates itb doesnot remove both numbers ", () => {
    expect(removeDuplicate([1, 2, 3, 4, 5, 5, 6])).toContain(5);
  });
});
