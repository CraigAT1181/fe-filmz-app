import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FilmCardable } from '../filmCard';
import { exampleFilms } from '../mock-film-cards';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor() {}

  getFilms(): Observable<FilmCardable[]> {
    const films = of(exampleFilms);
    return films;
  }

  getFilm(id: number): Observable<FilmCardable> {
    const film = exampleFilms.find((film) => {
      film.id === id;
    })!;
    return of(film);
  }
}
