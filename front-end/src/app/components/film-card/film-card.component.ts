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
  @Input() imageNull!: boolean
  @Input() filmCard!: FilmCardable;

  
  toggleWatched() {
    this.watched ? (this.watched = false) : (this.watched = true);
  }

  toggleWatchlisted() {
    this.watchlisted ? (this.watchlisted = false) : (this.watchlisted = true);
  }

  this.filmCard.img === null ? this.imageNull=true : this.imageNull = false;

}
