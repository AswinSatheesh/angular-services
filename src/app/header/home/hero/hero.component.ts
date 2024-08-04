import { Component, OnInit } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  SubscribeNow(){
    let subscribeval = new SubscribeService();
    subscribeval.onSubscribeClicked('Weekly');
  }

}
