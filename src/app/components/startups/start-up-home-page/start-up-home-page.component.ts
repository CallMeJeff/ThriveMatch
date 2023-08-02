import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api';

@Component({
  selector: 'app-start-up-home-page',
  templateUrl: './start-up-home-page.component.html',
  styleUrls: ['./start-up-home-page.component.scss']
})
export class StartUpHomePageComponent {
  isfetchstartups:boolean =false;
  formData: any;

constructor(private http: HttpClient, private apiservice:  ApiService , private routes : Router){}
signOut(){
  sessionStorage.clear();
  this.routes.navigate(['/'])
  alert('sign out successfull')
}
   }

