function withStreet(teacher, street) {
  teacher.street = street;
  teacher.getAddress = function () {
    return `${this.name} lives on ${this.street}`;
  };
  return teacher;
}

export default withStreet;
