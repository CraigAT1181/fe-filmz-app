import { Component, Input } from '@angular/core';
import { FriendCardable } from 'src/app/interfaces/friendCard';

@Component({
  selector: 'app-friends-card',
  templateUrl: './friends-card.component.html',
  styleUrls: ['./friends-card.component.css']
})
export class FriendsCardComponent {

  @Input() friendCard!: FriendCardable;

}
