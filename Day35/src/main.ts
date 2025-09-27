import { IEmployee } from "./interfaces/IEmployee";
import { Employee } from "./models/Employee";
import { Manager } from "./models/Manager";
import { User } from "./classes/User";
import { MathOperations } from "./namespaces/MathOperations";

// Main application logic
console.log("=== TypeScript Assignments Demo ===\n");

// Assignment 1: Employee Class
console.log("1. Testing Employee Class:");
const employeeData: IEmployee = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
};

const employee1 = new Employee(employeeData);
const employee2 = new Employee({
  ...employeeData,
  id: 2,
  name: "Peter Joseph",
  username: "peter_torki",
  email: "peterjoseph@gmail.com",
});

console.log(`Employee ID: ${employee1.id}`);
console.log(`Employee Name: ${employee1.name}`);
console.log(`Employee Username: ${employee1.username}`);
console.log(`Total Employee Instances: ${Employee.getInstanceCount()}`);

// Assignment 2: Manager Class
console.log("\n2. Testing Manager Class:");
const manager = new Manager({
  ...employeeData,
  id: 3,
  name: "Alice Manager",
  username: "alice_mgr",
  email: "alice@company.com",
});

manager.addTeamMember(employee1);
manager.addTeamMember(employee2);
console.log(`Manager's team size: ${manager.getTeamSize()}`);
console.log(`Employee address: ${manager.viewEmployeeAddress(employee1)}`);

// Assignment 3: Timestamp Decorator
console.log("\n3. Testing Timestamp Decorator:");
const user1 = new User("John Smith", "john@example.com");
const user2 = new User("Jane Doe", "jane@example.com");

console.log(`User greeting: ${user1.greet()}`);
console.log(`User info: ${user1.getInfo()}`);

// Assignment 4: MathOperations Namespace
console.log("\n4. Testing MathOperations Namespace:");
console.log(`Add 10 + 5 = ${MathOperations.add(10, 5)}`);
console.log(`Subtract 10 - 3 = ${MathOperations.subtract(10, 3)}`);
console.log(`Multiply 4 * 7 = ${MathOperations.multiply(4, 7)}`);
console.log(`Divide 15 / 3 = ${MathOperations.divide(15, 3)}`);

// Error handling examples
console.log("\n=== Error Handling Examples ===");
try {
  console.log(MathOperations.divide(10, 0));
} catch (error: any) {
  console.log(`Error: ${error.message}`);
}
