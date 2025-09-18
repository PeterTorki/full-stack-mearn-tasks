class Employee {
  constructor(name = "", dept = "general") {
    this.name = name;
    this.dept = dept;
  }
}

class Manager extends Employee {
  constructor(name, dept, reports = []) {
    super(name, dept);
    this.reports = reports;
  }
}

class WorkerBee extends Employee {
  constructor(name, dept, projects = []) {
    super(name, dept);
    this.projects = projects;
  }
}

class SalesPerson extends WorkerBee {
  constructor(name, quota = 100) {
    super(name, "sales");
    this.quota = quota;
  }
}

class Engineer extends WorkerBee {
  constructor(name = "", machine = "") {
    super(name, "engineering");
    this.machine = machine;
  }
}

export { Employee, Manager, WorkerBee, SalesPerson, Engineer };
