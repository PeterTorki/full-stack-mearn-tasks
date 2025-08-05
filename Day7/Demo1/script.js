// console.log("Start");  // 1
// console.log("1");  // 2
// function fun(){
//   console.log("function exec start");  // 6 
//   console.log("2");   // 7
//   setTimeout(function(){
//     console.log("3"); // 10  11
//   },1000) 
//   console.log("function exec end"); // 8
// }
// console.log("4"); // 3

// setTimeout(function(){
//   console.log("5");  // 11 10
  
// },2000)
// setTimeout(function(){
//   console.log("6"); //9
// },0)
// console.log("7"); // 4
// console.log("done");  // 5
// fun()
// -----------------------------------------------------


/**4 main catigories of obj
 *  - built-in object
 *  - custom object
 *  - BOM
 *  - DOM
 */

var obj = {
  propName: 'Ahmed',
  propAdd: '123str',
  std: true
}

console.log(obj);

obj.age = 50;
console.log(obj)
console.log(obj.propName)

delete(obj.std)
console.log(obj)
delete obj.propAdd
console.log(obj)

// Dot Notaion == obj.
// Subscript Notation obj['property name']

// console.log(obj['propName']);
var x = 'propName';
console.log(obj[x])

if(obj.test){
  console.log('foundend')
}else {
  console.log('notFounded')
}

console.log('='.repeat(20))

// var userName = 'Aya'
var obj2 = {
  userName:'Omar',
  userAge: 25,
  display: function(){
    // return this.userName;
    return obj2.userName;
  }
}

console.log(obj2.display())


// function myFun(){
//   var x = 5;

//   var sum = function(y){
//     var z = 3;
//     return x + y + z
//   }

//   return sum(5)
// }

// console.log(myFun()) // 13

/** two ways to create an object
 *    - new constructor
 *    - letral creation
 */

// var str = 'this is a string'
// var str2 = new String('hello string from new constructor')

// console.log(str)
// console.log(str.length)
// console.log(str2)
// console.log(str2.length)
// console.log("/*".repeat(25))
// var myObj = new Object();

// myObj.name = 'Ibrhaim';
// myObj.age = 66;

// console.log(myObj)
// console.log(obj2)

var arr = [9, 6, 5, 'hello', true]

console.log(arr.length) // 5
console.log(obj2.length) // undefined

// for-in
// for-of

// for(var elem in obj2){
//   console.log(obj2[elem])
// }

console.log("****************************************")

// var newObj = obj2

// console.log(newObj)
// console.log(obj2)

// newObj.test = 'test'

// console.log(newObj)
// console.log(obj2)


//*************************************** */

// var obj3 = {
//   name: 'ahmed',
//   age: 22,
//   skills: {
//     skill1: 'Hmtl',
//     skill2: 'css',
//     skill3: 'js'
//   }
// }
// // var newObj = {}

// for(var elm in obj3){
  //   newObj[elm] = obj3[elm]
  // }
  
  // console.log(newObj)
  // console.log(obj3)
  
  // newObj.test = 'testProp'
  
  // console.log(newObj)
  // console.log(obj3)
  
  // console.log(newObj.skills)
  // newObj.skills.skill2 = 'node.js'
  
  // console.log(newObj)


  // ***************************------------


  var obj3 = {
    name: 'ahmed',
    age: 22,
    skills: {
      skill1: 'Hmtl',
      skill2: 'css',
      skill3: 'js'
    }
  }
  // var newObj = JSON.parse(JSON.stringify(obj3))
  var newObj = structuredClone(obj3)
  console.log(newObj)
  console.log(obj3)

  newObj.skills.skill2 = 'node.js'
  
  console.log(newObj)
  console.log(obj3)

  /** Regular function [Fucntion statment]
   *    - hoisting
   */

  add(5, 6)
  function add(x,y) {
    console.log(x + y)
  }


  /** function expression ==> [anonymous function assigned to a variable]
   *    - not hoisited
   */

// var add2 = function(x,y){
//   console.log(x+y) // 5

//   console.log(add2.caller) // null
//   // console.log(this) // window
// }

// add2(2, 3)

// function newFun(){
//   console.log('newFun');

//   add2(1,2)
// }

// newFun()


// setTimeout(function(){
//   console.log('setTimeout')
// },2000)


// function funnnn(){
//   console.log('setTimeout')
// }

// setTimeout(funnnn,2000)


// (function(){
//   var x2 = 5
//   z=10
//   console.log('setTimeout')
//   console.log(x2)
// })()

// console.log(z)


// var arr5 = [6, 8, 12, 3, 'hello']
// var str6 = 'hello from advjs day 1'

/** Borrowing in js
 *    - call
 *    - apply
 *    - bind
 */


// console.log([].join.call(str6, ''))
// console.log([].join.call(str6, ' '))
// console.log([].join.call(str6, '='))


// // console.log([].join.apply(str6, ['=']))



// // var res = [].join.bind(str6, ['='])
// var res = [].join.bind(str6)
// console.log(res('//'))


// var h = 6;
// function outerFun(x){
//   var y = 2;
//   z = 1;
//   var h = 2  // shadwing
//   function innerFun(a){
//     var b = 8;

//     return a + b + z + y + x + h
//   }
//   return innerFun
// }

// var result = outerFun(3);

// console.log(result(5)) // innerFun

// console.log(h) // 6


function outerFun(){
  var arr = [];

  for(var i = 0; i<3; i++){
    arr.push((
      function outerFun(i){
        return function(){
        console.log(i)
    }
      }
    )(i))
  }

  return arr
}

var res = outerFun()

console.log(res) // [f,f,f]

res[0]() // 0  3
res[1]() // 1  3
res[2]() // 2  3