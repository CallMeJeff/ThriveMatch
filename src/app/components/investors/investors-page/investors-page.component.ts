import { Component,ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-investors-page',
  templateUrl: './investors-page.component.html',
  styleUrls: ['./investors-page.component.scss']
})
export class InvestorsPageComponent implements OnInit{
   formGroup!: FormGroup;
   formData = {
    //define form data model
    name: '',
    email: '',
    desc: '',
    industry: '',
    address:'',
    image:null as File | null
    };

   investorsForm =new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    industry:new FormControl('',[Validators.required]),
    desc: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),

   })

 constructor(private elementRef: ElementRef,private apiservice: ApiService, private http: HttpClient, private routes : Router){}

 signOut(){
  sessionStorage.clear();
  this.routes.navigate(['/'])
  alert('sign out successfull')
}

 scrollToinvestorSetup(){
    const investorSetup = this.elementRef.nativeElement.querySelector('#investorSetup');
    investorSetup.scrollIntoView({behavior:'smooth'});
  }
  onFileChange(event: any) {
    this.formData.image = event.target.files[0] as File;
  }

  ngOnInit(): void {
    console.log(sessionStorage.getItem)
  }

  onSubmit(){
    console.log('function called');
    this.apiservice.individualinvestor(this.formData).subscribe((data) => {
      if(data.token  !== null){
        return data.message;
      }
      console.log('submitted form');
    })

  if (!this.formData.image) {
    console.log('No image selected');
    return;
  }
    // const formData: FormData = new FormData();
    // formData.append('name', this.formData.name);
    // formData.append('desc', this.formData.desc);
    // formData.append('industry', this.formData.industry);
    // formData.append('email', this.formData.email);
    // formData.append('address', this.formData.address);
    // formData.append('image', this.formData.image);

      }

    }
