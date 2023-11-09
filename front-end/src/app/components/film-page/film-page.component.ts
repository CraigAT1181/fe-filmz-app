import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { FilmService } from 'src/app/services/film.service';
import { exampleFilms } from 'src/app/mock-film-cards';
import { FilmCardable } from 'src/app/interfaces/filmCard';
import { TmdbApiService } from 'src/app/services/tmdb-api.service';
import { SynopsisCardable } from 'src/app/interfaces/synopsis';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.css'],
})
export class FilmPageComponent {
  film!: FilmCardable;
  title!: string;
  img!: string;
  overview!: string;
  synopsisCard!: SynopsisCardable;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private location: Location,
    private tmdbApiService: TmdbApiService
  ) {}

  ngOnInit(): void {
    this.getFilmID();
    this.getFilmName();
  }

  // Accessing TMDB
  getFilmName() {
    this.tmdbApiService
      .getFilmByTitle(this.film.title)
      .then(({ data: { results } }) => {
        console.log(results[0]);
        this.synopsisCard = {
          title: results[0].title,
          image: `https://image.tmdb.org/t/p/w500${results[0].poster_path}`,
          year: results[0].release_date.slice(0,4),
          overview: results[0].overview,
          language: results[0].original_language,
        }; // Will be part of the SynopsisCard ticket
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  // Accessing our back-end
  getFilmID(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.filmService.getFilm(id).subscribe((film) => {
      this.film = film;
      return film;
    });
  }
}
