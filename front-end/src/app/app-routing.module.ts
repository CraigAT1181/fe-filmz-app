import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilmPageComponent } from './components/film-page/film-page.component';
import { SearchResultsPageComponent } from './components/search-results-page/search-results-page.component';
import { FriendsPageComponent } from './components/friends-page/friends-page.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { ReviewPageComponent } from './components/review-page/review-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HelpPageComponent } from './components/help-page/help-page.component';

const routes: Routes = [
  { path: 'film/:id', component: FilmPageComponent },
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchResultsPageComponent },
  { path: 'users/:userid/friends', component: FriendsPageComponent },
  { path: 'users/:userid/reviews', component: ReviewPageComponent },
  { path: 'help', component: HelpPageComponent },
  { path: 'users/:userid/watchlist', component: WatchlistComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
