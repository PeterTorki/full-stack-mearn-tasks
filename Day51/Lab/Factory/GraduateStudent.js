export class GraduateStudent {
  constructor(name, researchTopic, supervisor) {
    this.name = name;
    this.researchTopic = researchTopic;
    this.supervisor = supervisor;
    this.type = "Graduate";
  }

  getInfo() {
    return `${this.name} is a ${this.type} student researching "${this.researchTopic}" under ${this.supervisor}`;
  }
}
