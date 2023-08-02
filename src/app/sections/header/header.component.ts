import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor( private router: Router ){}
  signOut(){
    sessionStorage.clear();
    this.router.navigate(['/'])
    alert('sign out successfull')
  }
}
