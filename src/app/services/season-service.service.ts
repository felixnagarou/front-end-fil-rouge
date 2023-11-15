import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Season} from "../models/Season";

@Injectable({
  providedIn: 'root'
})
export class SeasonServiceService {

  constructor(private http:HttpClient) {

  }
    configUrl:string = "assets/config.json"

  getAllSeasonsFromMovie(movieId:string){
    return this.http.get<Season[]>(this.configUrl + movieId+ "seasons")
  }



}
