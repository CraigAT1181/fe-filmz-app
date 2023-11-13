import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  constructor() {}

  calculateItemsToDisplay(screenWidth: number): number {
    if (screenWidth < 576) {
      return 1;
    } else if (screenWidth < 768) {
      return 2;
    } else if (screenWidth < 992) {
      return 3;
    } else if (screenWidth < 1200) {
      return 4;
    } else {
      return 5;
    }
  }
}
