import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';
  authenticationError = false;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  login() {
    this.authService.authenticate(this.username, this.password).subscribe({
      next: (authenticated) => {
        if (authenticated) {
          this.router.navigate(['/']);
          this.authenticationError = false;
        } else {
          this.authenticationError = true;
          console.log('Invalid credentials');
        }
      },
      error: (error) => {
        this.authenticationError = true;
        console.error('Authentication error', error.response.data);
      },
    });
  }
}
