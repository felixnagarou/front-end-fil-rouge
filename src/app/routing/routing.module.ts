import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {HomepageComponent} from "../components/homepage/homepage.component";
import {Error404Component} from "../components/errors/error404/error404.component";
import {MovieDetailsComponent} from "../components/movie-details/movie-details.component";
import {MovieThumbnailComponent} from "../components/movie-thumbnail/movie-thumbnail.component";


const routes:Routes = [{
  path:'', component:HomepageComponent},
  {path:'movie-details', component:MovieDetailsComponent},
  {path:'movie-thumbnail', component:MovieThumbnailComponent},
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
