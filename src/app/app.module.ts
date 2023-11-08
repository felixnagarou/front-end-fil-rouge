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
    UserPreferencesParametersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
