import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { TmdbApiService } from 'src/app/services/tmdb-api.service';
import { SynopsisCardable } from 'src/app/interfaces/synopsis-card';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.css'],
})
export class FilmPageComponent {
  synopsisCard!: SynopsisCardable;
  isLoaded!: boolean;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private tmdbApiService: TmdbApiService
  ) {}

  ngOnInit(): void {
    this.getFilmDetails();
  }
  getGenres(genres: []): string[] {
    const filmGenres = genres.map((genre: any) => {
      return genre.name;
    });
    return filmGenres;
  }

  getAverageRating(id: number) {}

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
      let rating: any = 3;
      try {
        const rating = await this.tmdbApiService.getFilmRatingById(id);
      } catch {
        rating = 3;
      }
      const nullImage = 'assets/image-not-found.png';
      let imageSource;

      console.log(rating.data);
      if (data.poster_path === null) {
        imageSource = 'assets/image-not-found.png';
      } else {
        imageSource = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
      }

      rating.toFixed(2);

      this.synopsisCard = {
        title: data.title,
        image: imageSource,
        year: data.release_date.slice(0, 4),
        overview: data.overview,
        language: data.original_language,
        avgRating: rating,
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
}
