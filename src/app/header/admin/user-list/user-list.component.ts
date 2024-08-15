import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import {USER_TOKEN} from './../../../app.module'
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  constructor(@Inject(USER_TOKEN) private userService : UserService){

  }
  userList = this.userService.GetAllUsers();

  onClickUserList(user : User){
    this.userService.onShowUserList(user);
  }
}
