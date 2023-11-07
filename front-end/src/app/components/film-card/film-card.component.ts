import { Component, Input } from '@angular/core';
import { FilmCardable } from 'src/app/filmCard';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css'],
})
export class FilmCardComponent {
  @Input() filmCard!: FilmCardable;


}
