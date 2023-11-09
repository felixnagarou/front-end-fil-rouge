import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {HomepageComponent} from "../components/homepage/homepage.component";
import {Error404Component} from "../components/errors/error404/error404.component";
import {MovieDetailsComponent} from "../components/movie-details/movie-details.component";
import {MovieThumbnailComponent} from "../components/movie-thumbnail/movie-thumbnail.component";
import {FavoritesComponent} from "../components/favorites/favorites.component";
import {MovieListingComponent} from "../components/movie-listing/movie-listing.component";
import {UserProfileParametersComponent} from "../components/user-profile-parameters/user-profile-parameters.component";
import {
  UserPreferencesParametersComponent
} from "../components/user-preferences-parameters/user-preferences-parameters.component";
import {LoginPageComponent} from "../components/login-page/login-page.component";
import {UserAccountParametersComponent} from "../components/user-account-parameters/user-account-parameters.component";
import {HistoryComponent} from "../components/history/history.component";


const routes:Routes = [
  {path: '', component:LoginPageComponent},
  {path:'home', component:HomepageComponent},
  {path:'movie-listing', component:MovieListingComponent, children:[
      {path:'movie-details', component:MovieDetailsComponent},
    ]},
  {path:'movie-thumbnail', component:MovieThumbnailComponent},
  {path:'userFeatures', component:UserProfileParametersComponent, children:[
      {path: 'parameters', component: UserAccountParametersComponent},
      {path:'preferences', component:UserPreferencesParametersComponent},
    ]},
  {path:'favorites', component:FavoritesComponent},
  {path:'history', component:HistoryComponent},
  {path:'**', component:Error404Component},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
