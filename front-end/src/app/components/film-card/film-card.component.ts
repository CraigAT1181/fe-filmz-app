import { Component, Input } from '@angular/core';
import { FilmCardable } from 'src/app/filmCard';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css'],
})
export class FilmCardComponent {
  @Input() watched: boolean = false;
  @Input() watchlisted: boolean = false;

  @Input() filmCard!: FilmCardable;

  toggleWatched() {
    this.watched ? (this.watched = false) : (this.watched = true);
  }

  toggleWatchlisted() {
    this.watchlisted ? (this.watchlisted = false) : (this.watchlisted = true);
  }
}
