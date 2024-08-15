import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoggerService{
    LoggerMessage(name : string, status : string){
        console.log(`A new user with name ${name} and with status ${status} is added to userList.`);
    }
}