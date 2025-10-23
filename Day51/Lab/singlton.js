class User {
  constructor(name) {
    if (User.instance) {
      this.count++;
      return User.instance;
    }
    this.name = name;
    this.count = 0;
    User.instance = this;
  }

  static getData() {
    return User.instance?.count ?? 0;
  }
}

const u1 = new User("Peter");

console.log(User.getData());

const u2 = new User("John");

console.log(User.getData());
console.log(u1 === u2);
