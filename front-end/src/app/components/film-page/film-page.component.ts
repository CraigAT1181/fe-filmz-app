import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { TmdbApiService } from 'src/app/services/tmdb-api.service';
import { SynopsisCardable } from 'src/app/interfaces/synopsis-card';
import { ReviewsService } from 'src/app/services/reviews.service';
import { ReviewCardable } from 'src/app/interfaces/review-card';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.css'],
})
export class FilmPageComponent {
  synopsisCard!: SynopsisCardable;
  isLoaded!: boolean;
  reviewCards: ReviewCardable[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private tmdbApiService: TmdbApiService,
    private reviewsService: ReviewsService
  ) {}

  ngOnInit(): void {
    this.getFilmDetails();
    this.getFilmReviews();
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
  // Accessing our back-end
  async getFilmDetails() {
    try {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      const { data } = await this.tmdbApiService.getFilmById(id);
      let rating: any = 3.00;
      try {
        const fetchedRating = await this.tmdbApiService.getFilmRatingById(id);
        rating = await Number(fetchedRating.data.average_rating)
      } catch {
        rating = 3.00;
      }
      const nullImage = 'assets/image-not-found.png';
      let imageSource;
      if (data.poster_path === null) {
        imageSource = 'assets/image-not-found.png';
      } else {
        imageSource = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
      }

      this.synopsisCard = {
        title: data.title,
        image: imageSource,
        year: data.release_date.slice(0, 4),
        overview: data.overview,
        language: data.original_language,
        avgRating: rating.toFixed(2),
        runtime: data.runtime,
        genre: this.getGenres(data.genres).join(', '),
        director: this.getDirector(data.credits.crew),
        actors: [
          data.credits.cast[0].name,
          data.credits.cast[1].name,
          data.credits.cast[2].name,
          data.credits.cast[3].name,
        ].join(', '),
      };
      this.isLoaded = true;
    } catch (error) {
      console.error('Error', error);
    }
  }

  async getFilmReviews(){
    try {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      const { data : {reviews} } = await this.reviewsService.getReviewsByFilmId(id)
      reviews.forEach((review: any) => {
        const reviewCard = {
          rating: review.rating,
          avatar: review.avatar,
          body: review.body,
          username: review.username,
          createdAt: review.created_at,
          title: review.original_title
        }
        
        this.reviewCards.push(reviewCard)
      });
    }
    catch{}
  }

}
