import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) {}

  sessionObject: any;
  sessionData(){
    const data = localStorage.getItem('token');
     if(data !== null){
       return this.sessionObject = JSON.parse(data);
    } else {
      return this.sessionObject = null;
    }
  }

  signup(data: any){
    return this.http.post('https://spring-thrivematch.calmwater-2978c172.eastus.azurecontainerapps.io/api/v1/userRegister',data);
  }

  login(data: any): Observable<any>  {
    return this.http.post('https://spring-thrivematch.calmwater-2978c172.eastus.azurecontainerapps.io/api/v1/userLogin',data)
    .pipe(
      map((response: any) => {
        // Assuming the token is received as part of the response
        const token = response.token;
        localStorage.setItem('token', JSON.stringify(token));
        return response;
      })
    );
  }
  individualinvestor(data: any){
    return this.http.post<any>('https://spring-thrivematch.calmwater-2978c172.eastus.azurecontainerapps.io/api/v1/individual_investor', data, this.generateHeaders())
  }



    generateHeaders(){
    return {
      headers: new HttpHeaders({
      Authorization :'Bearer ' + localStorage.getItem('token')

    })};
  }

  //  add startup
  onUploadStartupInfo(formData: {
    name: string;
    email: string;
    desc: string;
    industry: string;
    address: string;
    poBox: string;
    year: string;
    image: File;
  }): Observable<any> { // Return an Observable
    console.log(formData);
    const headers = new HttpHeaders({ myHeader: 'startup' });
    return this.http.post(
      'https://spring-thrivematch.calmwater-2978c172.eastus.azurecontainerapps.io/api/v1/add_startup',
      formData,this.generateHeaders()
    );
  }
  
  // fetch startup
  fetchstartups() {
    return this.http.get<{[key: string]: FormData}>('https://spring-thrivematch.calmwater-2978c172.eastus.azurecontainerapps.io/api/v1/add_startup')
  .pipe(map((res)=>{
     const formData =[];
     for(const key in res){
      if (res.hasOwnProperty(key)){
        formData.push({...res[key],id:key})
      }
     }
     return formData;
  }))
  }

  // delete start up file


  // delete all starups

}

 // individualinvestor(data: any){
  //   return this.http.post<any>('https://spring-thrivematch.calmwater-2978c172.eastus.azurecontainerapps.io/api/v1/individual_investor', data, this.generateHeaders())
  // }


// post(endpoint: string, data: any) {
//   return this.http.post(this.apiUrl + endpoint, data, { headers: this.getHeaders() });
// }

// Add other HTTP methods as needed
// private apiUrl = 'https://spring-thrivematch.calmwater-2978c172.eastus.azurecontainerapps.io/api/v1/add_startup';
// Replace with your API endpoint URL

// Define methods to make API requests here
// submitFormData(formData: any) {
//   return this.http.post('https://spring-thrivematch.calmwater-2978c172.eastus.azurecontainerapps.io/api/v1/individual_investor', formData);

// private apiUrl = 'https://spring-thrivematch.calmwater-2978c172.eastus.azurecontainerapps.io/api/v1/userLogin';
// authServiceService: any;

// private getHeaders(): HttpHeaders {
//   const token = this.authServiceService.getToken();
//   if (token) {
//     return new HttpHeaders({ 'Authorization': `Bearer ${token}` });
//   } else {
//     return new HttpHeaders();
//   }
// }
