import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
//import { AuthServiceService } from 'src/app/services/auth-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from 'src/app/services/api';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{
sessionData: any;
sessionObject: any;
username!: string;
email!: string;
password!: string;

constructor(private fb: FormBuilder,
  private router : Router,
  private apiService: ApiService,
  ){}

ngOnInit() {
  if (this.apiService.sessionData() !== null) {
    this.sessionObject = this.apiService.sessionData();
    if (this.sessionObject !== null) {
      const sessionToken = this.sessionObject.token;
      if (this.sessionObject !== null) {
        this.router.navigate(['/homepage']);
      }
    }
  }
}

SignUpForm =this.fb.group({
  username: ['',[Validators.required]],
  email: ['',[Validators.required, Validators.email]],
  password:['',[Validators.required, Validators.minLength(8)]],
});

onSubmit() {
//   if(this.SignUpForm.valid)
//   //send data
// {
//   console.log(this.SignUpForm.value);
// }else{
//   // throw an error
//   this.validateAllFormFields(this.SignUpForm);
// }
// }

// private validateAllFormFields(formGroup:FormGroup) {
//   Object.keys(formGroup.controls).forEach(field=>{
//     const control =formGroup.get(field);
//     if(control instanceof FormControl) {
//       control.markAsDirty({onlySelf:true});
//     } else if (control instanceof FormGroup){
//       this.validateAllFormFields(control)
//     }
//   })
  const model ={
    username:this.SignUpForm.value.username,
    email:this.SignUpForm.value.email,
    password:this.SignUpForm.value.password
  }

this.apiService.signup(model).subscribe(
  (result: any) => {
    console.log(this.email)
    console.log(this.password)
    console.log(this.username)
    // Handle successful sign up response
    localStorage.setItem('token', result.token);

    this.router.navigateByUrl('/homepage');
     console.log('sign up successful:');
  },
  // Handle login error
  (error: HttpErrorResponse) => {
    if (error.status === 401) {
      alert('invalid crendentials');
      console.log(model);
    } else {
      alert('invalid crendentials error');
    }

  }
);
 }

// icons
type: string ="password";
isText: boolean =false;
eyeIcon: string = "fa-eye-slash"

hideShowPass(){
  this.isText = !this.isText;
  this.isText ? this.eyeIcon= "fa-eye" : this.eyeIcon ="fa-eye-slash";
  this.isText ? this.type="text" : this.type="password";
}


}

// passwordVisible = false;

// togglePasswordVisibility() {
//   this.passwordVisible = !this.passwordVisible;

// }


// type: string ="password";
// isText: boolean =false;
// eyeIcon: string = "fa-eye-slash"

// hideShowPass(){
//   this.isText = !this.isText;
//   this.isText ? this.eyeIcon= "fa-eye" : this.eyeIcon ="fa-eye-slash";
//   this.isText ? this.type="text" : this.type="password";
// }

// get (){return this.SignUpForm.controls}

// get email()
// {
//   return this.SignUpForm.get('email');
// }
// get password()
// {
//   return this.SignUpForm.get('password');
// }


