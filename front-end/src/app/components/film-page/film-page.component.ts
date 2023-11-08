import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { FilmService } from 'src/app/services/film.service';
import { exampleFilms } from 'src/app/mock-film-cards';
import { FilmCardable } from 'src/app/filmCard';
import { TmdbApiService } from 'src/app/services/tmdb-api.service';

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
    this.tmdbApiService.getFilmByTitle()
    .then(({data: {results}}) => {
      console.log(results[0])  
      this.title = results[0].title;
      this.img = `https://image.tmdb.org/t/p/w500${results[0].poster_path}`;
      this.overview = results[0].overview; // Will be part of the SynopsisCard ticket
    }).catch(error => {
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
