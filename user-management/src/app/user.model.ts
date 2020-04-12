export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  age: Number;
  login: string;
  password: string;
  isDeleted: boolean;
  updatedAt: Date;
}
