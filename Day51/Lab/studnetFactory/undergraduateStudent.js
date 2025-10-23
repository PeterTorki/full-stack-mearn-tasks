import Student from "./student.js";

class UndergraduateStudent extends Student {
  constructor(name, major) {
    super(name);
    this.major = major || "Undeclared";
  }
  getInfo() {
    return `${super.getInfo()}, Major: ${this.major}`;
  }
}

export default UndergraduateStudent;
