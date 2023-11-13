import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbApiService } from 'src/app/services/tmdb-api.service';
import { FilmCardable } from 'src/app/interfaces/filmCard';
import { Observable, switchMap } from 'rxjs';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.css'],
})
export class SearchResultsPageComponent {
  filmCards: FilmCardable[] = [];

  constructor(
    private tmdbApiService: TmdbApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getFilmQuery();
  }

  getFilmQuery(): void {
    const rawQuery = this.route.snapshot.queryParams;
    const queryKey = Object.keys(rawQuery)[0]; // to be used later when search query functionality is built out to include other criteria e.g. search by genre, actor etc
    const queryValue = Object.values(rawQuery)[0];
    console.log(queryValue);
    this.tmdbApiService.getFilmByTitle(queryValue).then(({ data }) => {
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
