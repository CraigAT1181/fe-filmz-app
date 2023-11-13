import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilmPageComponent } from './components/film-page/film-page.component';
import { SearchResultsPageComponent } from './components/search-results-page/search-results-page.component';
import { FriendsPageComponent } from './components/friends-page/friends-page.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';

const routes: Routes = [
  {path: "film/:id", component: FilmPageComponent},
  {path: "", component: HomeComponent},
  {path: "search", component: SearchResultsPageComponent},
  {path: "users/:userid/friends", component: FriendsPageComponent},
  {path: "users/:userid/watchlist", component: WatchlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }