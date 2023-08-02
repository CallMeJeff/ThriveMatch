import { Component } from '@angular/core';
import { LikedService } from 'src/app/services/likes';

@Component({
  selector: 'app-my-matches',
  templateUrl: './my-matches.component.html',
  styleUrls: ['./my-matches.component.scss']
})
export class MyMatchesComponent {

 constructor( private likedservice: LikedService){}

 getLikedCards(): Set<number> {
  return this.likedservice.getLikedCards();
}
}
