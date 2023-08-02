import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor( private router: Router ){}
  showMoreContent =false;
  showMoreText =' Show More';

  toggleShowMore(){
   this.showMoreContent =! this.showMoreContent;
   this.showMoreText =!this.showMoreText ? 'Show More' : 'Show Less';
  }

  signOut(){
    sessionStorage.clear();
    this.router.navigate(['/'])
    alert('sign out successfull')
  }
}
