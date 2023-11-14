import { Component, Input } from '@angular/core';
import { FilmCardable } from 'src/app/interfaces/filmCard';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css'],
})
export class FilmCardComponent {
  @Input() watched: boolean = false;
  @Input() watchlisted: boolean = false;
  @Input() imageNull!: boolean;
  @Input() filmCard!: FilmCardable;

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
