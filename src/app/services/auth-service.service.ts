import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
}
// private readonly TOKEN_KEY ='token'

//   setToken(token: string): void {
//     localStorage.setItem(this.TOKEN_KEY, token);
//   }

//   getToken(): string | null {
//     return localStorage.getItem(this.TOKEN_KEY);
//   }

//   removeToken(): void {
//     localStorage.removeItem(this.TOKEN_KEY);
//   }


  // constructor (private http: HttpClient, private router : Router) { }
  // login(data: any): Observable<any>{
  //   return this.http.post('https://spring-thrivematch.calmwater-2978c172.eastus.azurecontainerapps.io/api/v1/userLogin',data);
  // }

  // signup(data: any): Observable<any>{
  //   return this.http.post('https://spring-thrivematch.calmwater-2978c172.eastus.azurecontainerapps.io/api/v1/userRegister',data);
  // }

//   login(login: any) {
//     return this.http.post<any>('https://spring-thrivematch.calmwater-2978c172.eastus.azurecontainerapps.io/api/v1/userLogin', login);
//   }

//  getToken(){
//     return localStorage.getItem('token');
//   }

//  storedToken(tokenValue: string){
//     localStorage.setItem('token', tokenValue);
//     console.log('mytokennn',tokenValue)
//   }

//  isLoggedIn():boolean{
//     return !!localStorage.getItem('token')
//   }

// logOut(){
//     localStorage.clear();
//     this.router.navigate(['login'])
//   }

  //
