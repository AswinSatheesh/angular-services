import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import {USER_TOKEN} from './../../app.module'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent{

  constructor(@Inject(USER_TOKEN) private userService : UserService){

  }

  name : string ='';
  gender : string = 'Male';
  subType : string = 'Quaterly';
  status : string = 'Active'

  createNewUser(){
    this.userService.CreateUser(this.name,this.gender,this.subType,this.status);
    console.log(this.userService.users);
    
  }

}
