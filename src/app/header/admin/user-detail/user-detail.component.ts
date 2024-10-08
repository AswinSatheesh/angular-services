import { Component, inject, OnInit } from '@angular/core';
import {User} from '../../../Models/User'
import { UserService } from '../../../Services/user.service';
import { USER_TOKEN } from 'src/app/app.module';


@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{

  selectedUser! : User;
  userService = inject(USER_TOKEN);
  // constructor(private userService : UserService){}

  ngOnInit(){
    this.userService.onUserDetailsClicked.subscribe((data : User)=>{
      this.selectedUser = data;
      console.log(this.selectedUser);
    })
  }

}
