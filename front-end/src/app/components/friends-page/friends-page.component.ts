import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { FriendCardable } from 'src/app/interfaces/friendCard';
import { FriendsService } from 'src/app/services/friends.service';

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.css'],
})
export class FriendsPageComponent {
  friendCards: FriendCardable[] = [];

  constructor(
    private friendsService: FriendsService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getFriendsList();
  }

  getFriendsList(): void {
    const userid = Number(this.route.snapshot.paramMap.get('userid'));

    this.friendsService.getFriends(userid).then(({ data }) => {
      data.forEach((result: any, index: number) => {
        const friendCard = {
          id: result.friend_id,
          img: '',
          // result.avatar,
          name: result.friend_name,
          recentReviews: [ '', '', ''
            // result.reviews[0],
            // result.reviews[1],
            // result.reviews[2],
          ],
        };

        this.friendCards.push(friendCard);
      });
    });
  }
}
