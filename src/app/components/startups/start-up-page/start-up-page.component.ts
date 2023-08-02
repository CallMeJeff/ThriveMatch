import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api';

@Component({
  selector: 'app-start-up-page',
  templateUrl: './start-up-page.component.html',
  styleUrls: ['./start-up-page.component.scss']
})
export class StartUpPageComponent implements OnInit {
  formData: FormGroup;
  imageFile: string | Blob;

  constructor(
    private elementRef: ElementRef,
    private http: HttpClient,
    private apiservice: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.formData = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      industry:new FormControl('',[Validators.required]),
      desc: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required]),
      poBox: new FormControl('',[Validators.required]),
      year: new FormControl('',[Validators.required]),
      image: new FormControl('',[Validators.required]),
    });
  }

  scrollTostartupSetup() {
    const startupSetup = this.elementRef.nativeElement.querySelector('#startupSetup');
    startupSetup.scrollIntoView({ behavior: 'smooth' });
  }

  onFileChange(event: any) {
    const file = event.target.files[0] as File;
    this.readImageFile(file);
  }
  readImageFile(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageDataURL = e.target.result as string;
      this.formData.patchValue({ image: imageDataURL }); // Set the value to the image data URL
    };
    reader.readAsDataURL(file);
  }

  signOut(){
    sessionStorage.clear();
    this.router.navigate(['/'])
    alert('sign out successfull')
  }

  onSubmit() {
    if (this.formData.valid) {
      // Form is valid, submit the data to the API
      this.apiservice.onUploadStartupInfo(this.formData.value).subscribe(
        (response) => {
          console.log('Form submitted successfully:', response);
          // Handle the successful response here, e.g., show a success message
        },
        (error) => {
          console.error('Error submitting form:', error);
          // Handle the error response here, e.g., show an error message
        }
      );
    } else {
      // Form is invalid, show validation errors or perform other actions
      console.log('Form is invalid. Please check the fields.');
    }
  }
  //
}

