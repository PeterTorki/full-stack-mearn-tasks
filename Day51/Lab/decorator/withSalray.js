function withSalary(teacher, salary) {
  teacher.salary = salary;
  teacher.getSalary = function () {
    return `${this.name}'s salary is $${this.salary}`;
  };
  return teacher;
}

export default withSalary;
