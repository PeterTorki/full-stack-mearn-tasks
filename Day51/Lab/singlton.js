class User {
  constructor(name) {
    if (User.instance) {
      return User.instance;
    }
    this.name = name;
    this.count = 0;
    User.instance = this;
  }

  increaseCounter() {
    this.count++;
  }

  static getData() {
    return User.instance?.count ?? 0;
  }
}

const u1 = new User("Peter");
u1.increaseCounter();
u1.increaseCounter();
u1.increaseCounter();

console.log(User.getData());

const u2 = new User("John");
u2.increaseCounter();

console.log(User.getData());
console.log(u1 === u2);
