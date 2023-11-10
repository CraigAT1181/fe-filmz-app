import { Component } from '@angular/core';
import { FriendCardable } from 'src/app/interfaces/friendCard';
import { FriendsService } from 'src/app/services/friends.service';

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.css']
})
export class FriendsPageComponent {
  friendCards: FriendCardable[] = [];

  constructor(private friendsService: FriendsService) {}

  ngOnInit(): void {
    this.friendsService
      .getFriends()
      .subscribe((friendCards) => (this.friendCards = friendCards));
  }
}
