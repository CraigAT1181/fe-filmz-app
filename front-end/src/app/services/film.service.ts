import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FilmCardable } from '../interfaces/filmCard';
import { exampleFilms } from '../mock-film-cards';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor() {}

  api = axios;

  // getFilms(): Observable<FilmCardable[]> {
  //   const films = of(exampleFilms);
  //   return films;
  // }

  // getFilm(id: number): Observable<FilmCardable> {
  //   const film = exampleFilms.find((f) => f.id === id)!;
  //   return of(film);
  // }

  getWatchlist(userid: number) {
    return this.api.get(
      `https://be-filmz-app.onrender.com/users/${userid}/watchlist`
    );
  }

}
