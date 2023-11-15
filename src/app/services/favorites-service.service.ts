import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Movie} from "../models/Movie";
import {PostAPIResponse} from "../models/PostAPIResponse";

@Injectable({
  providedIn: 'root'
})
export class FavoritesServiceService {

  constructor(private http:HttpClient) {

  }
   configurl:string = "assets/config.json"

  getAllFavorites(userId:string){
    return this.http.get<Movie[]>(this.configurl  + "favorites" + userId, {
      headers: new HttpHeaders()
    })
  }

  addMovieToFavorites(userId:string, movieId:string){
    return this.http.post<Movie>(this.configurl +  "favorites" + userId, movieId, {
      headers: new HttpHeaders()
    })
  }

  removeMovieFromFavorites(userId:string, movieId:string){
    return this.http.delete<Movie>(this.configurl + "favorites" + movieId, {
      headers: new HttpHeaders()
    })
  }

  removeAllMoviesFromFavorites(userId:string){
    return this.http.delete<Movie[]>(this.configurl + "favorites" + userId, {
      headers: new HttpHeaders()
    })
  }
}
