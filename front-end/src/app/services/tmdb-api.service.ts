import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class TmdbApiService {
  constructor() {}

  api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/search',
  });

  getFilmByTitle(title: string) {
    return this.api.get(
      `https://be-filmz-app.onrender.com/tmdb/films/${title}`
    );
  }

  getPopularFilms() {
    return this.api.get(`https://be-filmz-app.onrender.com/tmdb/films/popular`);
  }

  getFilmById(id: number) {
    return this.api.get(`https://be-filmz-app.onrender.com/tmdb/films/${id}`);
  }

  getFilmRatingById(id: number) {
    return this.api.get(`https://be-filmz-app.onrender.com/films/${id}`);
  }

  getAllFilmsRatings() {
    return this.api.get(`https://be-filmz-app.onrender.com/films`);
  }
}
