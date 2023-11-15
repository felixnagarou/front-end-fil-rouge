import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ConfigComponent } from './components/config/config.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieThumbnailComponent } from './components/movie-thumbnail/movie-thumbnail.component';
import { ListModalComponent } from './components/shared/list-modal/list-modal.component';
import { LogModalComponent } from './components/shared/log-modal/log-modal.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import {RoutingModule} from "./routing/routing.module";
import { Error404Component } from './components/errors/error404/error404.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { UserProfileParametersComponent } from './components/user-profile-parameters/user-profile-parameters.component';
import { UserPreferencesParametersComponent } from './components/user-preferences-parameters/user-preferences-parameters.component';
import { ListComponent } from './components/list/list.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { MovieListingComponent } from './components/movie-listing/movie-listing.component';
import { HistoryComponent } from './components/history/history.component';
import { UserAccountParametersComponent } from './components/user-account-parameters/user-account-parameters.component';
import { TagsDisplayComponent } from './components/tags-display/tags-display.component';
import { CategoriesDisplayComponent } from './components/categories-display/categories-display.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SerieDetailsComponent } from './components/serie-details/serie-details.component';
import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';
import {FormsModule} from "@angular/forms";
import { SerieListingComponent } from './components/serie-listing/serie-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    MovieDetailsComponent,
    MovieThumbnailComponent,
    ListModalComponent,
    LogModalComponent,
    HomepageComponent,
    Error404Component,
    SearchBarComponent,
    UserProfileParametersComponent,
    UserPreferencesParametersComponent,
    ListComponent,
    LoginPageComponent,
    RecommendationsComponent,
    FavoritesComponent,
    MovieListingComponent,
    HistoryComponent,
    UserAccountParametersComponent,
    TagsDisplayComponent,
    CategoriesDisplayComponent,
    SearchResultsComponent,
    SerieDetailsComponent,
    EpisodeDetailsComponent,
    SerieListingComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RoutingModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
