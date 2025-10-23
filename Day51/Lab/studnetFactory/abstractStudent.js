import GraduateStudent from "./graduateStudent.js";
import UndergraduateStudent from "./undergraduateStudent.js";

class StudentFactory {
  static generateStudent(type, name) {
    switch (type) {
      case "graduate":
        return new GraduateStudent(name);
      case "undergraduate":
        return new UndergraduateStudent(name);
      default:
        throw new Error("Invalid student type");
    }
  }
}

export default StudentFactory;
