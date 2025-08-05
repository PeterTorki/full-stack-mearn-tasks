
// // var obj1 = {
// //   name: 'Ahmed',
// //   age: 25,
// //   address: '123str',
// //   display: function(){
// //     return this.name
// //   }
// // }

// // console.log(obj1)
// // var obj2 = {
// //   name: 'Rana',
// //   age: 33,
// //   address: '456str',
// //   display: function(){
// //     return this.name
// //   }
// // }

// // var obj3 = {
// //   name: 'Nader',
// //   age: 44,
// //   address: '789str',
// //   display: function(){
// //     return this.name
// //   }
// // }

// /**
//  * Factory Function
//  * Constructor Function
//  */

// /** Factory */

// // function Employee(nm, age, add){
// //   return {
// //     name: nm,
// //     age:age,
// //     address: add,
// //     display: function(){
// //       return this.name
// //     }
// //   }
// // }


// // Constructor

// function Employee(nm='Ali', ag=26, add, id){
//   var ID = id ||0
//   this.name = nm || 'blabla'
//   this.age = ag||1;
//   this.address = add||'nasr city';

//   // this.display = function(){
//   //   return this.name
//   // }
//   this.getId = function(){
//     return ID
//   }

//   this.setId = function(value) {
//     ID = value;
//   }
// }

// Employee.prototype.display = function(welcomeMsg){
//   if(welcomeMsg === undefined){
//     return this.name
//   }else {
//     alert(welcomeMsg)
//   }
// }

// Employee.prototype.info = function(){
//   // console.log(this)
//   // alert(this.name)
//   var that = this
//   setTimeout( function(){
//       alert('hello ya: '+ that.name)
//   }, 2000);

// }

// Employee.prototype.getIddddd = function(){
//   return ID
// }

// // function Employee(nm, ag, add, id, salary, dpt){
// //   this.salary = salary;
// //   this.dpt =dpt;
// //   console.log(arguments)
// // }

// var emp1 = new Employee(null,undefined)
// var emp2 = new Employee('Omar', 33, '456str', 222)
// var emp3 = new Employee('Ahmed', 44, '789str', 333)


/** Binding in js
 * Default binding
 * Implicit binding
 */

// function fun(){
//   console.log(this)
// }

// fun()

// var obj = {
//   name: 'ahmed',
//   myFun: fun 
// }

// function fun (){
//   function myFun(){
//     function myFun2(){
//       console.log(this)
//     }
//     myFun2()
//   }
//   myFun()
// }

// fun()

// obj.myFun()

// fun()

// function myFun(){
//   var val = "myVal";
//   this.val = 'myNewVal'
//   this.fun = fun;
//   this.fun()  // myNewVal // myNewVal // myNewVal
//   fun()  // undfined //globalVal // myNewVal
// }
// function fun(){
//   console.log(this.val)
// }
// var val = "globalVal";
// myFun()
// console.log(val)  // globalVal // globalVal // myNewVal


function myFun(){
  var val = "myVal";
  this.val = 'myNewVal'
  this.fun = fun;
  this.fun()  // 
  fun()  // 
}
function fun(){
  console.log(this.val)
}
var val = "globalVal";
// myFun()
var x = new myFun() 
console.log(val)  // 