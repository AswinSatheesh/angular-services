import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [SubscribeService]
})
export class HeaderComponent implements OnInit {

  constructor(private subscribeval : SubscribeService) { }

  ngOnInit(): void {
  }
  clickSubscribe(){
    // let subscribeval = new SubscribeService(); //do not use like this
    this.subscribeval.onSubscribeClicked('monthly');
  }
}
