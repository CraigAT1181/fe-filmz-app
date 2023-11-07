import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { FilmService } from 'src/app/services/film.service';
import { exampleFilms } from 'src/app/mock-film-cards';
import { FilmCardable } from 'src/app/filmCard';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.css']
})
export class FilmPageComponent {
film: FilmCardable[] = [];

constructor (
  private route: ActivatedRoute,
  private filmService: FilmService,
  private location: Location
) {}

ngOnInit(): void {
  this.getFilmID(); 
}

getFilmID(): void{
const id = Number (this.route.snapshot.paramMap.get('id'))
this.filmService.getFilms(id).subscribe((film) => {this.film = film})
}
}
