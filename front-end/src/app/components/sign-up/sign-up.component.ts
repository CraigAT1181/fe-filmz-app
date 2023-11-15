import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  picture_url: string = '';
  isRegistrationError = false;
  isRegistrationSuccess = false;
  userExists = false;

  constructor(private router: Router, private signupService: SignupService) {}

  signUp() {
    const avatar =
      this.picture_url ||
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D';

    this.signupService
      .registerUser({
        username: this.username,
        email: this.email,
        password: this.password,
        avatar,
      })
      .subscribe({
        next: (response) => {
          if (response && response.success) {
            this.isRegistrationSuccess = true;
            this.isRegistrationError = false;
            this.userExists = false;
          } else if (response.data[0].status === 409) {
            this.isRegistrationSuccess = false;
            this.userExists = true;
          } else {
            this.isRegistrationSuccess = false;
            this.isRegistrationError = true;
            console.log('Invalid registration');
          }
        },
        error: (error) => {
          this.isRegistrationSuccess = false;
          this.isRegistrationError = true;
          console.error('Registration error', error.response.data);
          if (error.response && error.response.status === 409) {
            console.log('Duplicate username or email');
          }
        },
      });
  }
}
