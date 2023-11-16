import { Component, Input } from '@angular/core';
import { SynopsisCardable } from 'src/app/interfaces/synopsis-card';

@Component({
  selector: 'app-film-synopsis-card',
  templateUrl: './film-synopsis-card.component.html',
  styleUrls: ['./film-synopsis-card.component.css'],
})
export class FilmSynopsisCardComponent {
  isButtonClicked: boolean = false;
  @Input() synopsisCard!: SynopsisCardable;

  getRatingColor(rating: number): string {
    if (rating > 70) {
      return 'green';
    } else if (rating > 40) {
      return 'yellow';
    } else {
      return 'red';
    }
  }

  toggleButtonClick() {
    this.isButtonClicked = !this.isButtonClicked;
  }
}
