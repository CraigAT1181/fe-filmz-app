import { Component, HostListener } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { FilmCardable } from 'src/app/interfaces/filmCard';
import { TmdbApiService } from 'src/app/services/tmdb-api.service';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  filmCards: FilmCardable[] = [];
  chunkedFilmCards: FilmCardable[][] = [];
  activeIndices: number[] = [];
  itemsToDisplay: number;

  constructor(
    private tmdbApiService: TmdbApiService,
    private carouselService: CarouselService
  ) {
    this.itemsToDisplay = this.carouselService.calculateItemsToDisplay(
      window.innerWidth
    );
  }

  ngOnInit(): void {
    this.activeIndices = [0];
    this.tmdbApiService.getPopularFilms().then(({ data }) => {

      data.forEach((result: any, index: number) => {
        let imageSource;
        if (result.poster_path === null) {
          imageSource = 'assets/image-not-found.png';
        } else {
          imageSource = `https://image.tmdb.org/t/p/w500${result.poster_path}`;
        }

        const filmCard = {
          id: result.id,
          title: result.title,
          img: imageSource,
          avgRating: 4,
          friendReviews: ['barbara', 'Harry'],
        };
        this.filmCards.push(filmCard);
      });

      this.chunkedFilmCards = this.chunkArray(
        this.filmCards,
        this.itemsToDisplay
      );
    });
  }

  isItemActive(index: number): boolean {
    return this.activeIndices.includes(index);
  }

  chunkArray(arr: any[], size: number): any[] {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateItemsToDisplay();
    this.updateChunkedFilmCards();
  }

  updateItemsToDisplay() {
    this.itemsToDisplay = this.calculateCarouselItemsToDisplay();
  }

  updateChunkedFilmCards() {
    this.chunkedFilmCards = this.chunkArray(
      this.filmCards,
      this.itemsToDisplay
    );
  }

  calculateCarouselItemsToDisplay(): number {
    return this.carouselService.calculateItemsToDisplay(window.innerWidth);
  }

  getColumnClass(): string {
    const itemsToDisplay = this.carouselService.calculateItemsToDisplay(
      window.innerWidth
    );
    return `col-${Math.floor(12 / itemsToDisplay)}`;
  }
}
