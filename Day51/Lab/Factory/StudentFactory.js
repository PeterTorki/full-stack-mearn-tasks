import { UnderGraduateStudent } from "./UnderGraduateStudent.js";
import { GraduateStudent } from "./GraduateStudent.js";

export default class StudentFactory {
  static createStudent(type, data) {
    switch (type) {
      case "undergraduate":
        return new UnderGraduateStudent(data.name, data.major, data.year);
      case "graduate":
        return new GraduateStudent(data.name, data.researchTopic, data.supervisor);
      default:
        throw new Error("Unknown student type");
    }
  }
}
