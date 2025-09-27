import { IAddress } from "./IAddress";

export interface IEmployee {
  readonly id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
}
