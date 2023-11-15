import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private apiUrl = 'https://be-filmz-app.onrender.com';

  constructor() {}

  registerUser(userData: any): Observable<{ success: boolean; data?: any }> {
    return new Observable<{ success: boolean; data?: any }>((observer) => {
      axios
        .post(`${this.apiUrl}/users`, userData)
        .then((response) => {
          if (response.data[0].status === 200) {
            observer.next({ success: true, data: response.data });
          } else {
            observer.next({ success: false, data: response.data });
          }
          observer.complete();
        })
        .catch((error) => {
          if (error.response && error.response.status === 409) {
            observer.next({ success: false });
          } else {
            observer.next({ success: false });
          }
          observer.complete();
        });
    });
  }
}
