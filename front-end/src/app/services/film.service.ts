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

  getWatchlist(userid: number) {
    return this.api.get(
      `https://be-filmz-app.onrender.com/users/${userid}/watchlist`
    );
  }

}
