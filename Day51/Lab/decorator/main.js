import Teacher from "./Teacher";
let teacher1 = new Teacher("Alice", "Mathematics");

teacher1 = withSalary(teacher1, 5000);
teacher1 = withNationality(teacher1, "Canadian");
teacher1 = withStreet(teacher1, "Maple Street");

console.log(teacher1.describe());
console.log(teacher1.getSalary());
console.log(teacher1.getNationality());
console.log(teacher1.getAddress());
