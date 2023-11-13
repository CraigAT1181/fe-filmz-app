import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewCardable } from 'src/app/interfaces/review-card';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent {
  reviewCards: ReviewCardable[] = []
  constructor(
    private route: ActivatedRoute, private ReviewsService: ReviewsService
  ){}
  ngOnInit(): void {this.getReviews()}
  getReviews(): void {
    const userid = Number(this.route.snapshot.paramMap.get("userid"))
    this.ReviewsService.getReviewsByUserId(userid).then(({data: {reviews}})=>{
      console.log(reviews)
      reviews.forEach((result: any, index: number) => {
        const reviewCard = {
          username: result.username, 
          avatar: result.avatar,
          createdAt: result.created_at,
          rating: result.rating,
          votes: result.votes,
          body: result.body, 
          title: "movie title"
        }
        this.reviewCards.push(reviewCard)
        console.log(reviewCard)
      });
    })
  }
}

