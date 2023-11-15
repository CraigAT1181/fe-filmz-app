import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { FilmCardable } from 'src/app/interfaces/filmCard';
import { FilmService } from 'src/app/services/film.service';
import { TmdbApiService } from 'src/app/services/tmdb-api.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent {
  filmCards: FilmCardable[] = [];
  @Input() filmCard!: FilmCardable;
  watchStatus: Boolean = false;
  watchedUnchecked: Boolean = false;
  allChecked: Boolean = false;

  constructor(
    private filmService: FilmService,
    private location: Location,
    private route: ActivatedRoute,
    private tmdbApiService: TmdbApiService
  ) {}

  ngOnInit(): void {
    this.getWatchlist();
  }

  onWatchedChange(event: any) {
    this.watchedUnchecked = event.target.checked;
  }

  onAllChange(event: any) {
    this.allChecked = event.target.checked;
  }

  async getRating(id: number) {
    try {
      const { data } = await this.tmdbApiService.getFilmRatingById(id);
      return data.average_rating;
    } catch {
      return 3;
    }
  }

  async getWatchlist() {
    try {
      const userid = Number(this.route.snapshot.paramMap.get('userid'));

      const { data } = await this.filmService.getWatchlist(userid);
      data.watchlist.forEach(async (result: any, index: number) => {
        const rating = this.getRating(result.id);

        const filmCard = {
          id: result.id,
          title: result.title,
          img: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
          avgRating: await rating,
          friendReviews: ['barbara,Harry'],
        };
        this.watchStatus = result.is_watched;
        this.filmCards.push(filmCard);
      });
    } catch {}
  }
}
