import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilmPageComponent } from './components/film-page/film-page.component';
import { SearchResultsPageComponent } from './components/search-results-page/search-results-page.component';

const routes: Routes = [
  {path: "film/:id", component: FilmPageComponent},
  {path: "", component: HomeComponent},
  {path: "search", component: SearchResultsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }