import { Component } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { FilmCardable } from 'src/app/interfaces/filmCard';
import { TmdbApiService } from 'src/app/services/tmdb-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  filmCards: FilmCardable[] = [];

  constructor(private tmdbApiService: TmdbApiService) {}

  ngOnInit(): void {
    this.tmdbApiService.getPopularFilms().then(({ data }) => {
      console.log(data);
      data.forEach((result: any, index: number) => {
        const filmCard = {
          id: result.id,
          title: result.title,
          img: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
          avgRating: 4,
          friendReviews: ['barbara,Harry'],
        };
        this.filmCards.push(filmCard);
      });
    });
  }
}
