export class UnderGraduateStudent {
  constructor(name, major, year) {
    this.name = name;
    this.major = major;
    this.year = year;
    this.type = "Undergraduate";
  }

  getInfo() {
    return `${this.name} is an ${this.type} student majoring in ${this.major}, year ${this.year}`;
  }
}
