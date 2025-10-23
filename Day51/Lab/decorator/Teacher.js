class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }

  describe() {
    return `${this.name} teaches ${this.subject}`;
  }
}

export default Teacher;
