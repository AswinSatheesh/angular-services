import { Injectable } from "@angular/core";

@Injectable()
export class SubscribeService{
    onSubscribeClicked(type : string){
        alert("Thankyou for subscribing "+ type +" plan!. Your Subscription is activated. Enjoy Your Plan..");
    }
}