import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  constructor(@Inject('USER_SERVICE') private userService : UserService){

  }
  userList = this.userService.GetAllUsers();

}
