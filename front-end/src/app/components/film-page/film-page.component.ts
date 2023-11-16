import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { TmdbApiService } from 'src/app/services/tmdb-api.service';
import { SynopsisCardable } from 'src/app/interfaces/synopsis-card';
import { ReviewsService } from 'src/app/services/reviews.service';
import { ReviewCardable } from 'src/app/interfaces/review-card';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.css'],
})
export class FilmPageComponent {
  synopsisCard!: SynopsisCardable;
  isLoaded!: boolean;
  reviewCards: ReviewCardable[] = [];
  currentFilmTitle!: string
  currentUserId!: any

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private tmdbApiService: TmdbApiService,
    private reviewsService: ReviewsService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.getFilmDetails();
    this.getFilmReviews();
    this.getCurrentUserId();
  }

  async getCurrentUserId(): Promise<any> {
    try {
    const data = await this.authenticationService.getUserId()
    this.currentUserId = data
    }
    catch {}
  }


  getGenres(genres: []): string[] {
    const filmGenres = genres.map((genre: any) => {
      return genre.name;
    });
    return filmGenres;
  }

  getDirector(crew: []): string[] {
    const director = crew.filter(({ job }) => job === 'Director');

    if (director.length === 0) {
      return ['Not applicable'];
    }
    return director[0]['name'];
  }

  async getFilmDetails() {
    try {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      const { data } = await this.tmdbApiService.getFilmById(id);
      let rating: any = 3.0;
      try {
        const fetchedRating = await this.tmdbApiService.getFilmRatingById(id);
        rating = await Number(fetchedRating.data.average_rating);
      } catch {
        rating = 3.0;
      }
      const nullImage = 'assets/image-not-found.png';
      let imageSource;
      if (data.poster_path === null) {
        imageSource = 'assets/image-not-found.png';
      } else {
        imageSource = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
      }

      let baseUrl = `https://image.tmdb.org/t/p/w500`;
      this.currentFilmTitle = data.title

      this.synopsisCard = {
        title: data.title,
        image: imageSource,
        year: data.release_date.slice(0, 4),
        date: data.release_date,
        overview: data.overview,
        language: data.original_language,
        avgRating: rating.toFixed(2),
        runtime: data.runtime,
        genre: this.getGenres(data.genres).join(', '),
        director: this.getDirector(data.credits.crew),
        actors_name: [
          data.credits.cast[0].name,
          data.credits.cast[1].name,
          data.credits.cast[2].name,
          data.credits.cast[3].name,
          data.credits.cast[4].name,
          data.credits.cast[5].name,
        ],
        actors_pic: [
          baseUrl + data.credits.cast[0].profile_path,
          baseUrl + data.credits.cast[1].profile_path,
          baseUrl + data.credits.cast[2].profile_path,
          baseUrl + data.credits.cast[3].profile_path,
          baseUrl + data.credits.cast[4].profile_path,
          baseUrl + data.credits.cast[5].profile_path,
        ],
        actors_character: [
          data.credits.cast[0].character,
          data.credits.cast[1].character,
          data.credits.cast[2].character,
          data.credits.cast[3].character,
          data.credits.cast[4].character,
          data.credits.cast[5].character,
        ],
      };
      this.isLoaded = true;
    } catch (error) {
      console.error('Error', error);
    }
  }

  async getFilmReviews() {
    try {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      const {
        data: { reviews },
      } = await this.reviewsService.getReviewsByFilmId(id);
      reviews.forEach((review: any) => {
        const reviewCard = {
          rating: review.rating,
          avatar: review.avatar,
          body: review.body,
          username: review.username,
          createdAt: review.created_at,
          title: review.original_title,
        };

        this.reviewCards.push(reviewCard);
      });
    } catch {}
  }


}
