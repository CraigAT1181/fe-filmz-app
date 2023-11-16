import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { ReviewsService } from 'src/app/services/reviews.service';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {

  @Input() filmTitle = ""
  @Input() userid!: number
  myForm!: FormGroup;
  constructor(
    private reviewsService: ReviewsService,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ){}



  ngOnInit(){
    this.myForm = new FormGroup({
      body: new FormControl("", Validators.required),
      rating: new FormControl(5, Validators.required)
    }) 
  }

  
onSubmit = () => {
  const filmid = Number(this.route.snapshot.paramMap.get("id"))
  const requestOptions = {body: this.myForm.value.body, user_id: this.userid, votes: 0, rating: this.myForm.value.rating, original_title: this.filmTitle}
  console.log(JSON.stringify(requestOptions), "request options");
  
  this.reviewsService.postReviewsByFilmId(filmid, requestOptions)
}
}
