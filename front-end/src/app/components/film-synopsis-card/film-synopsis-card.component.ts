import { Component, Input } from '@angular/core';
import { SynopsisCardable } from 'src/app/interfaces/synopsis';

@Component({
  selector: 'app-film-synopsis-card',
  templateUrl: './film-synopsis-card.component.html',
  styleUrls: ['./film-synopsis-card.component.css'],
})
export class FilmSynopsisCardComponent {
  @Input() synopsisCard!: SynopsisCardable;
}
