import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NavBarDrawerComponent } from './components/nav-bar-drawer/nav-bar-drawer.component';
import { FilmPageComponent } from './components/film-page/film-page.component';
import { FilmSynopsisCardComponent } from './components/film-synopsis-card/film-synopsis-card.component';
import { SearchResultsPageComponent } from './components/search-results-page/search-results-page.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FriendsPageComponent } from './components/friends-page/friends-page.component';
import { FriendsCardComponent } from './components/friends-card/friends-card.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { ReviewPageComponent } from './components/review-page/review-page.component';
import { ReviewsCardComponent } from './components/reviews-card/reviews-card.component';
import { LoginPageComponent } from './components/login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FilmCardComponent,
    SearchBarComponent,
    NavBarDrawerComponent,
    FilmPageComponent,
    FilmSynopsisCardComponent,
    SearchResultsPageComponent,
     FriendsPageComponent,
    FriendsCardComponent,
    WatchlistComponent,
    ReviewPageComponent,
    ReviewsCardComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
