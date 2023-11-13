import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor() { }
  api = axios.create({

  })
  getReviewsByUserId(userid: number){
    return this.api.get(`https://be-filmz-app.onrender.com/users/${userid}/reviews`)
  }
}
