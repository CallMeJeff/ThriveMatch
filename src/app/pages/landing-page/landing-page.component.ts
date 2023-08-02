import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
 
   showMoreContent =false;
   showMoreText =' Show More';

   toggleShowMore(){
    this.showMoreContent =! this.showMoreContent;
    this.showMoreText =!this.showMoreText ? 'Show More' : 'Show Less';
   }
}

