import Student from "./student.js";

class GraduateStudent extends Student {
  constructor(name, researchTopic) {
    super(name);
    this.researchTopic = researchTopic || "Not Specified";
  }
  getInfo() {
    return `${super.getInfo()}, Research Topic: ${this.researchTopic}`;
  }
}
export default GraduateStudent;
