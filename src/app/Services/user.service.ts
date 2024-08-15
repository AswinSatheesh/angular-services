import {User} from '../Models/User'

export class UserService{
    users : User[] = [
        new User('Aswin','Male','Yearly','Active'),
        new User('Girl','Female','Weekly','Active'),
        new User('Kannan','Male','Daily','InActive'),
    ];

    GetAllUsers(){
        return this.users;
    }

    CreateUser(name:string,gender: string, subType: string, status : string){
       let newUser =  new User(name,gender,subType,status);
       this.users.push(newUser);
    }
}