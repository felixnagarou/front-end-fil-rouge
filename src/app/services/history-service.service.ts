import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Movie} from "../models/Movie";

@Injectable({
  providedIn: 'root'
})
export class HistoryServiceService {

  constructor(private http:HttpClient) {

  }
   configUrl:string = "assets/config.json"

  getUserHistory(userId:string){
    return this.http.get<Movie[]>(this.configUrl + userId, {
      headers: new HttpHeaders
    })
  }

  deleteHistory(userId:string){
    return this.http.delete<Movie[]>(this.configUrl + userId, {
      headers: new HttpHeaders()
    })
  }



}
