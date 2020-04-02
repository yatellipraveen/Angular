export class User {
  public id?: string;
  public firstName: string;
  public lastName: string;
  public age: Number;
  public login: string;
  public password: string;
  public isDeleted: boolean;
  public updatedAt: Date;

  constructor(id, fname, lname, age, login, password, isDeleted, date) {
    this.id = id;
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    this.login = login;
    this.password = password;
    this.isDeleted = isDeleted;
    this.updatedAt = date;
  }
}
