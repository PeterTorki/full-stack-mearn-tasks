import StudentFactory from "./abstractStudent.js";
const gradStudent = StudentFactory.generateStudent("graduate", "Alice");
console.log(gradStudent.getInfo());

const undergradStudent = StudentFactory.generateStudent("undergraduate", "Bob");
console.log(undergradStudent.getInfo());
