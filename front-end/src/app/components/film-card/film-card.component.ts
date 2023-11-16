import { Component, Input } from '@angular/core';
import { FilmCardable } from 'src/app/interfaces/filmCard';
import { FilmService } from 'src/app/services/film.service';
import { ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css'],
})
export class FilmCardComponent {
  @Input() watched: boolean = false;
  @Input() watchlisted: boolean = false;
  @Input() filmCard!: FilmCardable;

  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute,
  ) {}

  getRatingColor(rating: number): string {
    if (rating > 70) {
      return 'green';
    } else if (rating > 40) {
      return 'yellow';
    } else {
      return 'red';
    }
  }
}
