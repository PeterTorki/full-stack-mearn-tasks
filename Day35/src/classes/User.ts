import { Timestamp } from "../decorators/Timestamp";

@Timestamp
export class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  greet(): string {
    return `Hello, I'm ${this.name}`;
  }

  getInfo(): string {
    return `Name: ${this.name}, Email: ${this.email}`;
  }
}
