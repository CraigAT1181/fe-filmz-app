import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FriendCardable } from 'src/app/interfaces/friendCard';
import { FriendsService } from 'src/app/services/friends.service';
import { TmdbApiService } from 'src/app/services/tmdb-api.service';

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.css'],
})
export class FriendsPageComponent {
  friendCards: FriendCardable[] = [];
  userAvatar: string = '';
  recentReviews: any[] = [];
  isLoaded!: boolean;

  constructor(
    private friendsService: FriendsService,
    private route: ActivatedRoute,
    private tmdbApiService: TmdbApiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const userid = Number(params.get('userid'));
      this.getFriendsList(userid);
    });
  }

  async getReviews(friendid: number): Promise<any[]> {
    try {
      const { data } = await this.friendsService.getUserReviews(friendid);
      return data.reviews;
    } catch (error) {
      console.error('Error fetching user info:', error);
      return [];
    }
  }

  async getFriendsList(userid: number) {
    try {
      const { data } = await this.friendsService.getFriends(userid);

      const reviewsPromises = data.map((result: any) =>
        this.getReviews(result.friend_id)
      );
      const reviews = await Promise.all(reviewsPromises);

      const processReviews = async (reviews: any[]) => {
        for (const reviewInfo of reviews) {
          const reviewsData = await Promise.all(
            reviewInfo.map(async (review: any) => {
              const { data } = await this.tmdbApiService.getFilmById(
                review.film_id
              );

              return {
                filmPoster: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
                film_id: data.id,
              };
            })
          );

          const friendCard = {
            img: reviewInfo[0].avatar,
            name: reviewInfo[0].username,
            reviews: reviewsData.slice(0, 2),
          };

          this.friendCards.push(friendCard);
        }
      };

      await processReviews(reviews);
      this.isLoaded = true;
    } catch (error) {
      console.error('Error fetching friends list:', error);
    }
  }
}
