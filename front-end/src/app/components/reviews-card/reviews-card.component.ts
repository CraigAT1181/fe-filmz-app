import { Component, Input } from '@angular/core';
import { ReviewCardable } from 'src/app/interfaces/review-card';

@Component({
  selector: 'app-reviews-card',
  templateUrl: './reviews-card.component.html',
  styleUrls: ['./reviews-card.component.css']
})
export class ReviewsCardComponent {
  @Input() reviewCard!: ReviewCardable
}
