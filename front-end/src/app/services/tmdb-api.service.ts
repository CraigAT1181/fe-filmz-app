import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {

  constructor() { }

api = axios.create({
baseURL: 'https://api.themoviedb.org/3/search'
})

  getFilmByTitle(){
    return this.api.get(`movie?query=Shrek&include_adult=false&language=en-US&page=1`, {
      headers: {
        Authorization: '' // Requires API Key input - removed before pushing to GitHub
      }
    })
  }
}
