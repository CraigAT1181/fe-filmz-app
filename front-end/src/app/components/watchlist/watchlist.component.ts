import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { FilmCardable } from 'src/app/interfaces/filmCard';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent {
  filmCards: FilmCardable[] = [];
  @Input() filmCard!: FilmCardable;

  constructor(
    private filmService: FilmService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getWatchlist();
  }

  getWatchlist(): void {
    const userid = Number(this.route.snapshot.paramMap.get('userid'));

    this.filmService.getWatchlist(userid).then(({ data: { watchlist } }) => {
      watchlist.forEach((result: any, index: number) => {
        const filmCard = {
          id: result.id,
          title: result.title,
          img: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
          avgRating: result.vote_average,
          friendReviews: ['barbara,Harry'],
        };

        this.filmCards.push(filmCard);
      });
    });
  }
}
