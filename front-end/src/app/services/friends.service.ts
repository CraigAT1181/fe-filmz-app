import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  constructor() {}

  api = axios;

  getFriends(userid: number) {
    return this.api.get(
      `https://be-filmz-app.onrender.com/users/${userid}/friends`
    );
  }
}