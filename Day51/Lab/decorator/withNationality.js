function withNationality(teacher, nationality) {
  teacher.nationality = nationality;
  teacher.getNationality = function () {
    return `${this.name} is ${this.nationality}`;
  };
  return teacher;
}

export default withNationality;
