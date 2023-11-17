import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Movie} from "../models/Movie";

@Injectable({
  providedIn: 'root'
})
export class RecommendationServiceService {

  constructor(private http:HttpClient) {

  }
  url:string = "http://localhost:8080/api/v1/auth/private/home"


  getAllRecommendedMovies(){
    return this.http.get<Movie[]>(this.url + "/recommended")
}


}
