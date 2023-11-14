import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav-bar-drawer',
  templateUrl: './nav-bar-drawer.component.html',
  styleUrls: ['./nav-bar-drawer.component.css'],
})
export class NavBarDrawerComponent {
  constructor(private authService: AuthenticationService) {}

  isLoggedIn() {
    return this.authService.getLoggedIn();
  }

  logout() {
    this.authService.logout();
  }

  getUsername() {
    return this.authService.getUsername();
  }

  getAvatar() {
    return this.authService.getAvatar();
  }
}
