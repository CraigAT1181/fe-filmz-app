import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NavBarDrawerComponent } from './components/nav-bar-drawer/nav-bar-drawer.component';
import { ButtonComponent } from './components/button/button.component';
import { FilmPageComponent } from './components/film-page/film-page.component';
import { FilmSynopsisCardComponent } from './components/film-synopsis-card/film-synopsis-card.component';
import { SearchResultsPageComponent } from './components/search-results-page/search-results-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoaderInterceptor } from 'src/interceptors/loader.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FilmCardComponent,
    SearchBarComponent,
    NavBarDrawerComponent,
    ButtonComponent,
    FilmPageComponent,
    FilmSynopsisCardComponent,
    SearchResultsPageComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
