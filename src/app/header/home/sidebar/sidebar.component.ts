import { Component, OnInit } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers : [SubscribeService]
})
export class SidebarComponent implements OnInit {

  constructor(private subscribeval : SubscribeService) { }

  ngOnInit(): void {
  }
  SubscribeNow(){
  //  let subscribeval = new SubscribeService();
   this.subscribeval.onSubscribeClicked('Yearly');
  }

}
