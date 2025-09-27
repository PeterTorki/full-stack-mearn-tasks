import { IAddress } from "../interfaces/IAddress";
import { IEmployee } from "../interfaces/IEmployee";

export class Employee implements IEmployee {
  readonly id: number;
  private _username: string;
  protected _address: IAddress;
  name: string;
  email: string;
  private static instanceCount: number = 0;

  constructor(data: IEmployee) {
    this.id = data.id;
    this.name = data.name;
    this._username = data.username;
    this.email = data.email;
    this._address = data.address;
    Employee.instanceCount++;
  }

  set username(username: string) {
    this._username = username;
  }

  get username(): string {
    return this._username;
  }

  set address(address: IAddress) {
    this._address = address;
  }

  get address() {
    return this._address;
  }

  static getInstanceCount(): number {
    return Employee.instanceCount;
  }

  static getTotalInstances(): number {
    return this.instanceCount;
  }
}
