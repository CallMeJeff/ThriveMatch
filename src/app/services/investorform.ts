import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://spring-thrivematch.calmwater-2978c172.eastus.azurecontainerapps.io/api/v1/add_investor';
  // Replace with your API endpoint URL

  constructor(private http: HttpClient,) { }
  // Define methods to make API requests here
  submitFormData(formData: any) {
    return this.http.post(this.apiUrl, formData);


}}
