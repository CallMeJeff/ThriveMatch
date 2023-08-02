import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Interface } from 'src/app/interface';
import { LikedService } from 'src/app/services/likes';

@Component({
  selector: 'app-investors-home-page',
  templateUrl: './investors-home-page.component.html',
  styleUrls: ['./investors-home-page.component.scss']
})
export class InvestorsHomePageComponent {
  @Input() cardId: number;


  constructor( private routes : Router ,private likedservice: LikedService){}

  signOut(){
    sessionStorage.clear();
    this.routes.navigate(['/'])
    alert('sign out successfull')
  }

  carousel: Interface[] = [
    {image:"https://images.unsplash.com/photo-1536604673810-81370412626d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", name:'name', desc:'desc'},
     {image:"https://images.unsplash.com/photo-1536604673810-81370412626d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", name:'name', desc:'desc'},]


  onLikeButtonClick() {
    if (this.isCardLiked()) {
      console.log("unliked");
      this.likedservice.removeLikedCards(this.cardId);
    } else {
      console.log("liked")
      this.likedservice.addLikedCards(this.cardId);
    }
  }

  isCardLiked(): boolean {
    return this.likedservice.getLikedCards().has(this.cardId);
  }
}


