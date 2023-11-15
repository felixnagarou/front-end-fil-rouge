import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Movie} from "../models/Movie";

@Injectable({
  providedIn: 'root'
})
export class RecommendationServiceService {

  constructor(private http:HttpClient) {

  }
  configUrl:string = "assets/config.json"

  getAllRecommendedMovies(){
    return this.http.get<Movie[]>(this.configUrl + "recommended")
}


}
