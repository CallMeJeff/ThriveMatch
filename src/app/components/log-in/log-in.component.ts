import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {

  LogInForm!: FormGroup;
  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.LogInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });

    // Check if the user is already authenticated
    if (this.apiService.sessionData() !== null) {
      const sessionToken = this.apiService.sessionData().token;
      if (sessionToken !== null) {
        this.router.navigate(['/homepage']);
      }
    }
  }

  onSubmit() {
    if (this.LogInForm.valid) {
      const model = {
        email: this.LogInForm.value.email,
        password: this.LogInForm.value.password,
      };

      // Call the login method from ApiService
      this.apiService.login(model).subscribe(
        (result: any) => {
          // Handle successful login response
          console.log('Login successful:', result);

          this.router.navigateByUrl('/homepage');
        },
        (error: HttpErrorResponse) => {
          // Handle login error
          if (error.status === 401) {
            alert('Invalid credentials');
          } else {
            alert('Login error');
          }
        }
      );
    } else {
      // Form is invalid, show validation errors or perform other actions
      console.log('Form is invalid. Please check the fields.');
    }

}

  // registration icons
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }
}
