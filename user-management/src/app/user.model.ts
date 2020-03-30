export class User{
    public id: string;
    public firstName: string;
    public lastName: string;
    public age: Number;
    public login:string;
    public password:string;
    isDeleted:boolean;

    constructor(id,fname,lname,age,login,password,isDeleted){
        this.id=id;
        this.firstName=fname;
        this.lastName=lname;
        this.age=age;
        this.login=login;
        this.password=password;
        this.isDeleted=isDeleted;
    }
}