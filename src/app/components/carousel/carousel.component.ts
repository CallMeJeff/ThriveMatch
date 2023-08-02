import { Component,Input } from '@angular/core';
import { Interface } from 'src/app/interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() imageUrl: string;
  @Input() title: string;
  @Input() desc: string;

  carousel: Interface[] = [
    {image:"https://images.unsplash.com/photo-1536604673810-81370412626d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", name:'name', desc:'desc'},
     {image:"https://images.unsplash.com/photo-1536604673810-81370412626d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", name:'name', desc:'desc'},
      {image:"https://images.unsplash.com/photo-1536604673810-81370412626d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", name:'name', desc:'desc'},
       {image:"https://images.unsplash.com/photo-1536604673810-81370412626d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", name:'name', desc:'desc'}
  ]
}
