// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login-page',
//   templateUrl: './login-page.component.html',
//   styleUrls: ['./login-page.component.css'],
// })
// export class LoginPageComponent {
//   username: string = '';
//   password: string = '';

//   constructor(private router: Router) {}

//   login() {
//     // Perform authentication logic here (e.g., call your backend API)
//     // For demonstration purposes, let's assume a successful login for now
//     console.log(this.username, this.password);

//     // Replace this with actual authentication logic
//     if (this.validateCredentials(this.username, this.password)) {
//       // Navigate to the home page or any other desired route upon successful login
//       this.router.navigate(['/']);
//     } else {
//       // Handle failed login (show error message, etc.)
//       console.log('Invalid credentials');
//     }
//   }

//   private validateCredentials(username: string, password: string): boolean {
//     // Replace this with actual authentication logic against your backend API
//     // For simplicity, we're assuming a hardcoded username and password
//     return username === 'billy' && password === 'GOAT';
//   }
// }

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
