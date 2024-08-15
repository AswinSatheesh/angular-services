import {User} from '../Models/User'
import { LoggerService } from './logger.service';
import {EventEmitter, Injectable} from '@angular/core'

@Injectable()
export class UserService{

    constructor(private logger : LoggerService){

    }
    users : User[] = [
        new User('Aswin','Male','Yearly','Active'),
        new User('Girl','Female','Weekly','Active'),
        new User('Kannan','Male','Daily','InActive'),
    ];

    onUserDetailsClicked : EventEmitter<User> = new EventEmitter<User>();

    onShowUserList(user : User){
        this.onUserDetailsClicked.emit(user);
        // console.log("emitting" ,user);
    }

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