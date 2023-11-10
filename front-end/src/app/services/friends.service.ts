import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FriendCardable } from '../interfaces/friendCard';
import { exampleFriends } from '../mock-friends';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  constructor() {}

  getFriends(): Observable<FriendCardable[]> {
    const friends = of(exampleFriends);
    return friends;
  }
}
