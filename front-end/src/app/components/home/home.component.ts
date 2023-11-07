import { Component } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { FilmCardable } from 'src/app/filmCard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
filmCards: FilmCardable[] = [];

constructor(private filmService: FilmService) {}

ngOnInit(): void {
  this.filmService.getFilms().subscribe((filmCards)=>(this.filmCards = filmCards));
}
}
