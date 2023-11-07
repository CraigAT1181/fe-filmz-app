import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FilmCardable } from '../filmCard';
import { exampleFilms } from '../mock-film-cards';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor() {}

  getFilms(id: number): Observable<FilmCardable[]> {
    const films = of(exampleFilms);
    return films;
  }
}
