function Employee(name, age, address) {
  // Cannot Add prototype
  return {
    name,
    age,
    address,
    display: function () {
      return this.name;
    },
  };
}

function EmployeeThis(name, age, address, id) {
  // Possible to add prototype
  this.name = name;
  this.age = age;
  this.address = address;
  var id = id;

  this.setId = function (idValue) {
    id = idValue;
  };

  this.getId = function () {
    return id;
  };
}

EmployeeThis.prototype.display = function () {
  return this.name;
};

var emp1 = Employee("peter", 23, "Egypt");
var emp2 = new EmployeeThis("Anton", 21, "Ism");

console.log(emp2);

emp2.setId(5);
console.log(emp2.getId());

function sayHi(a, b, c, d) {
  console.log("Hi");
}
