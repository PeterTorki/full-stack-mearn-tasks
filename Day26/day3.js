// class Person {
//   fName = "";
//   age = 0;
// }
// let p = new Person();
// p.fName = "mido";
// p.age = 25;
// console.log(p);
// class Person {
//   constructor(fName, age) {
//     this.fName = fName;
//     this.age = age;
//   }
//   move() {
//     console.log(`${this.fName} is moving`);
//   }
// }
// const p = new Person("mido", 25);
// console.log(p.age);
// p.move();

// console.log(p);
// const p2 = new Person("ali", 30);
// console.log(p2);
// p2.move();

// class Employee extends Person {
//   constructor(fname, age, dep) {
//     super(fname, age);
//     this.dep = dep;
//   }
//   move() {
//     console.log(`${this.fName.toUpperCase()} is working`);
//   }
// }
// const e = new Employee("emp1", 28, "IT");
// console.log(e);
// e.move();
// class Manager extends Employee {
//   #password;
//   constructor(fname, age, dep, emp, pass) {
//     super(fname, age, dep);
//     this.emp = emp;
//     this.#password = pass;
//   }
//   hiring() {
//     console.log(`${this.fName} is hiring`);
//   }
//   getpassword() {
//     console.log(this.#password);
//   }
//   get ageByDay() {
//     return this.age * 365 + " day";
//   }
//   set ageByDay(num) {
//     this.age = Math.floor(num / 365);
//   }
//   static create(fname, age, dep, emp, pass) {
//     return new Manager(fname, age, dep, emp, pass);
//   }
// }
// const m = new Manager("man1", 35, "IT", 5, "pass123");
// console.log(m);
// m.fName = "new Manager";
// m.move();
// m.hiring();
// console.log(m);
// //console.log(m.#password);
// m.getpassword();
// console.log((m.ageByDay = 50000));
// console.log(m.age);

// //console.log(m.ageByDay);
// let n = Manager.create("man2", 40, "HR", 10, "pass456");
// console.log(n);
// const myPromise = new Promise((res, rej) => {
//   // res("done");
//   rej("new error");
// });
// myPromise
//   .then((item) => {
//     console.log(item);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// const userPromise = new Promise((res, rej) => {
//   let isAdmin = true;
//   setTimeout(() => {
//     if (isAdmin) {
//       res("welcome admin");
//     } else {
//       rej("access denied");
//     }
//   }, 5000);
// });
// console.log("end");

// userPromise
//   .then((msg) => {
//     console.log(msg);

//   })
//   .catch((err) => {
//     console.log(err);
//   });
// userPromise
//   .then((msg) => {
//     console.log(msg);
//     return "msg";
//   })
//   .then((data2) => {
//     return data2.toUpperCase();
//   })
//   .then((data3) => {
//     return data3.trim();
//   });

// function getData() {
//   return fetch("https://jsonplaceholder.typicode.com/users");
// }
// function viewData() {
//   getData()
//     .then((res) => {
//       // console.log(res.json());
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       return data;
//     })
//     .then((data2) => {
//       return data2.filter((user) => user.id < 5);
//     })
//     .then((data2) => {
//       console.log(data2);
//     });
// }
// viewData();
// async function viewData2() {
//   try {
//     let res = await getData();
//     let data = await res.json();
//     console.log(data);
//     let data2 = data.filter((user) => user.id < 5);
//     console.log(data2);
//     console.log("---------------");
//     let data3 = data2.find((user) => {
//       return user.id == 2;
//     });
//     console.log(data3);
//     // let data3=
//   } catch (error) {}
// }
// viewData2();
export class Person {
  constructor(fName, age) {
    this.fName = fName;
    this.age = age;
  }
  move() {
    console.log(`${this.fName} is moving`);
  }
}
/**
 * this a test function
 * @param {number} x this is x
 * @param {string} y this is y
 */
function test(x, y) {
  console.log("test");
}
test(10, 20);
