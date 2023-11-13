import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent {

  constructor(
    private route: ActivatedRoute, private ReviewsService: ReviewsService
  ){}
  ngOnInit(): void {this.getReviews()}
  getReviews(): void {
    const userid = Number(this.route.snapshot.paramMap.get("userid"))
    this.ReviewsService.getReviewsByUserId(userid).then(({data})=>{
      console.log(data)
    })
  }
}

