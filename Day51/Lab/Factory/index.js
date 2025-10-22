import StudentFactory from "./StudentFactory.js";

const s1 = StudentFactory.createStudent("undergraduate", {
  name: "Peter",
  major: "Computer Science",
  year: 3,
});

const s2 = StudentFactory.createStudent("graduate", {
  name: "Lina",
  researchTopic: "AI in Healthcare",
  supervisor: "Dr. Ahmed",
});

console.log(s1.getInfo());
console.log(s2.getInfo());
