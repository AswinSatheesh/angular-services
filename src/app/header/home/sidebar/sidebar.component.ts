import { Component, OnInit } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  SubscribeNow(){
   let subscribeval = new SubscribeService();
   subscribeval.onSubscribeClicked('Yearly');
  }

}
