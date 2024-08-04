import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  clickSubscribe(){
    let subscribeval = new SubscribeService();
    subscribeval.onSubscribeClicked('monthly');
  }
}
