import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl = 'https://be-filmz-app.onrender.com';
  private isLoggedIn = false;
  private username: string | null = null;
  private avatar: string | null = null;

  constructor() {}

  authenticate(username: string, password: string): Observable<boolean> {
    const authenticationData = { username, password };

    return new Observable<boolean>((observer) => {
      axios
        .post<{ loggedIn: boolean; username?: string; avatar?: string }>(
          `${this.apiUrl}/authenticate`,
          authenticationData
        )
        .then((response) => {
          this.isLoggedIn = response.data.loggedIn;
          if (this.isLoggedIn) {
            this.username = response.data.username ?? null;
            this.avatar = response.data.avatar ?? null;
          }
          observer.next(this.isLoggedIn);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
          observer.complete();
        });
    });
  }

  getLoggedIn() {
    return this.isLoggedIn;
  }

  getUsername() {
    return this.username;
  }

  getAvatar() {
    return this.avatar;
  }

  logout() {
    this.isLoggedIn = false;
    this.username = null;
    this.avatar = null;
  }
}
