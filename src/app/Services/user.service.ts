import {User} from '../Models/User'
import { LoggerService } from './logger.service';
import {Injectable} from '@angular/core'

@Injectable()
export class UserService{

    constructor(private logger : LoggerService){

    }
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
    //    let loguser = new LoggerService(); //instead of explicitly instanciate we can use @Injectable

       this.logger.LoggerMessage(name,status);
    }
}