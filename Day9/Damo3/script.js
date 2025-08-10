// /** Binding in js
//  *    - Default binding   // window obj
//  *    - implicit binding  // obj.display ===> this bind on obj
//  *
//  *    - explicit binding // call, apply
//  *    - hard binding     // bind
//  *    - lexical binding ===> ES6
//  */

// function Employee(nm, ag, id){
//   // private property
//   var lastName = 'fixed name'
//   // global properites
//   this.name = nm;
//   this.age = ag;
//   this.id = id;
//   this.display = function(){
//     return this.age
//   }
//   // console.log(this)

//   // var that = this
//   // private function
//   function welcome(){
//     alert('welcom ya: '+ this.name);
//   }

//   // welcome() // bind window
//   /** Explicit binding
//    *    - call
//    *    - apply
//    *  Hard binding
//    *    - bind
//    */

//   // welcome.call(this) // explicit binding
//   // welcome.apply(this) // explicit binding

//   var fun = welcome.bind(this) // hard binding
//   fun()
// }

// var emp1 = new Employee('nader', 33, 123);
// var emp2 = new Employee('sarah', 44, 456);

// var obj = {
//   name: 'Ahmed',
//   age: 20,
//   display: function(){
//     return this.name
//   }
// }
// console.log(obj)

// delete obj.display
// obj.xyz = 'hello'
// obj.name = 'Omar'
// console.log(obj)

///**
// * Create a new property
// * modify on an existing property
// * delete property
// */

///** Property Discriptors
// *    - Data Discriptor      ==> js
// *    - Accessor Discritpor  ==>
// *
// *      - Object.defineProperty(obj,”prop”,{})
// *      - Object.defineProperties(obj,{})
// */

///** Data Discriptor
// *    - value ===> undefined
// *    - writable ===> false
// *    - enumerable ===> false
// *    - configurable ===> false
// */

// console.log('========== [Data Discriptor] ==========')
// var obj = {}

// Object.defineProperty(obj, 'name', {
//   value:'Amaar',
//   writable: true,
//   enumerable:false,
//   configurable: true
// })

// Object.defineProperty(obj, 'age', {
//   value: 23,
//   writable: true,
//   enumerable:true
// })

// Object.defineProperty(obj, 'display', {
//   value: function(){
//     return this.name
//   },
//   writable:true,
//   enumerable: true
// })

//console.log(obj)

//console.log('========== [Accessor Discriptor] ==========')

///** Accessor Discritpor // as a hiden property
// *    - get
// *    - set
// *    - enumerable ===> false
// *    - configurable ===> false
// */

//var obj2 = {}

//var propName = 'Rana'
//Object.defineProperty(obj2, 'name', {
//  get:function(){
//    // return 'ay7aga'  // static value
//    return propName
//  },
//  set: function(value){
//    propName = value
//  },
//  enumerable: true,
//  configurable: true
//})
//console.log(obj2)

// ==============================================

//var obj3 = {}

//Object.defineProperty(obj3, 'name', {
//  value:'Ahmed',
//  writable: true,
//  enumerable: true
//})

//Object.defineProperty(obj3, 'age', {
//  value: 44,
//  writable: true,
//  enumerable:true,
//  configurable:true
//})
//console.log("-----------------")
// console.log(obj3)

//var Id = 123
//Object.defineProperty(obj3, 'ID', {
//  get:function(){
//    return Id
//  },
//  set: function(value){
//    Id = value
//  }
//})

// console.log(obj3+obj3)  // [object Object][object Object]

// obj3.valueOf = function(){
//   return obj3.name
// }
// console.log(obj3+obj3)  // AhmedAhmed

// obj3.toString = function(){
//   return obj3.age
// }
// console.log(obj3+obj3)  // 88
// console.log(obj+obj)  // [object Object][object Object]

// valueOf() ==> numerical [normal] value
// toString() ==> String value

// var str = new String('hello ya Ahmed')
// console.log(str)

// var num = new Number(55)
// console.log(num)

// console.log(obj)

// var newObj = Object.create(obj)
// console.log(newObj)
// newObj.secondName = 'Ashraf'
// console.log(newObj)

// console.log(obj3)
//Object.defineProperty(obj3, 'lastName',{
//  value:'Hazem',
//  writable:true
//})
//console.log(obj3)

// Object.preventExtensions(obj3)

// obj3.xyz = 'abc'

//Object.defineProperty(obj3, 'secondName',{
//  value:'ahmed',
//  writable:true
//})

// Object.seal(obj3)

//console.log(obj3)
//console.log("*****")
//Object.freeze(obj3)

//obj3.xyz = 'abc'
//delete obj3.name // seal
//delete obj3.age  // seal
//obj3.age = 88    // freeze
//obj3.name = 'Hazem'

//console.log(obj3)

//=================================

// function Person(nm, age){
//   if(this.constructor === Person){
//     throw new Error('this is a abstract class')
//   }

//   this.name = nm;
//   this.age = age;
// }

// Person.prototype.toString = function(){
//   return this.name + " :: " + this.age
// }

//var p1 = new Person('Fatma', 44)
//console.log(p1)

// /** let me Summarize a steps of Inhertance
//  *    -1) Chain Parent Constructor
//  *           parent.call(this,...)
//  *    - 2) Copy Parent Prototype as a reference
//  *            Object.create
//  *              Employee.prototype = Object.create(Person.prototype)
//  *    - 3) re-setup child constructor
//  *           prototype functions and properties
//  *              Employee.prototype.constructor = Employee;
//  *              Employee.prototype.display = function() {
//                   return this.empName;
//   }
//  */

// function Employee(nm, age, id){

//   // if(this.constructor === Employee){
//   //   throw new Error('this is a abstract class')
//   // }

//   // For Inhirtance
//   // step1
//   Person.call(this, nm, age)

//   // public property
//   // Object.defineProperty(this, 'empName', {
//   //   value: nm,
//   //   writable:true
//   // })

//   // Object.defineProperty(this, 'empAge', {
//   //   value: age,
//   //   writable:true
//   // })

//   // private property
//   var Id = id;
//   Object.defineProperty(this, 'ID', {
//     get:function(){
//       return Id;
//     },
//     set:function(value){
//       Id = value
//     }
//   })

//   Employee.counter++
// }

//Employee.prototype.Person = Person.prototype
//Employee.prototype = Person.prototype
//Employee = Object.create(Person.prototype)
// Employee.prototype = Object.create(Person.prototype)
// Employee.prototype.constructor = Employee

// Employee.prototype.display = function(){
//   return 'hello from Employee Prototype'
// }

//Static property
// Employee.counter = 0

//Static Function
// Employee.display = function(){
//   // return this.empName

//   // return this.counter
//   return Employee.counter
// }
// console.log(Employee.display())

// var emp1 = new Employee('Aya', 33, 123)
// var emp2 = new Employee('Ahmed', 44, 456)
// var emp3 = new Employee('Omar', 55, 789)
// var emp4 = new Employee('Rana', 66, 152)
