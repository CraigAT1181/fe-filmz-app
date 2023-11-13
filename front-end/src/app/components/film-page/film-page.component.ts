import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { exampleFilms } from 'src/app/mock-film-cards';
import { FilmCardable } from 'src/app/interfaces/filmCard';
import { TmdbApiService } from 'src/app/services/tmdb-api.service';
import { SynopsisCardable } from 'src/app/interfaces/synopsis';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.css'],
})
export class FilmPageComponent {
  synopsisCard!: SynopsisCardable;
  title!: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private tmdbApiService: TmdbApiService
  ) {}

  ngOnInit(): void {
    this.getFilmDetails();
  }

  getGenres(genres: []): string[] {
    const filmGenres = genres.map((genre: any) => {
      return genre.name;
    });
    return filmGenres;
  }

  getDirector(crew: []): string[] {
    const director = crew.filter(({ job }) => job === 'Director');
    return director[0]['name'];
  }

  // Accessing our back-end
  getFilmDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tmdbApiService
      .getFilmById(id)
      .then(({ data }) => {
        console.log('data', data.poster_path);
        this.synopsisCard = {
          title: data.title,
          image: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
          year: data.release_date.slice(0, 4),
          overview: data.overview,
          language: data.original_language,
          avgRating: 4,
          runtime: data.runtime,
          genre: this.getGenres(data.genres).join(', '),
          director: this.getDirector(data.credits.crew),
          actors: [
            data.credits.cast[0].name,
            data.credits.cast[1].name,
            data.credits.cast[2].name,
            data.credits.cast[3].name,
          ].join(', '),
        };
        console.log(this.synopsisCard.image, 'image');
      })
      .catch((error) => {
        console.log(error, 'ERROR');
      });
  }
}
