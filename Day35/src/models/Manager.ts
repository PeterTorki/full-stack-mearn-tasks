import { Employee } from "./Employee";
import { IEmployee } from "../interfaces/IEmployee";

export class Manager extends Employee {
  private team: Employee[] = [];

  constructor(data: IEmployee) {
    super(data);
  }

  addTeamMember(employee: Employee): void {
    this.team.push(employee);
  }

  // Function to view employee address
  viewEmployeeAddress(employee: Employee): string {
    const addr = employee.address;
    return `${addr.street}, ${addr.suite}, ${addr.city}, ${addr.zipcode}`;
  }

  getTeamSize(): number {
    return this.team.length;
  }

  getTeam(): Employee[] {
    return [...this.team]; // Return a copy to maintain encapsulation
  }
}
