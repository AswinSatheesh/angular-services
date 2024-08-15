import { Component, inject, OnInit } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  // constructor(private subscribeval : SubscribeService) { } //instead of using this consturctor we can use new way
  subscribeval = inject(SubscribeService);

  ngOnInit(): void {
  }

  SubscribeNow(){
    // let subscribeval = new SubscribeService();
    
    this.subscribeval.onSubscribeClicked('Weekly');
  }

}
