import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Movie} from "../models/Movie";
import {PostAPIResponse} from "../models/PostAPIResponse";
import {Serie} from "../models/Serie";

@Injectable({
  providedIn: 'root'
})
export class SerieServiceService {

  constructor(private http:HttpClient) {

  }

  configUrl:string = "assets/config.json"


  getAllSeries(){
    return this.http.get<Serie[]>(this.configUrl + "series",{
      headers: new HttpHeaders()
    })
  }


  getSeriesByTitle(title:string){
    return this.http.get<Serie[]>(this.configUrl + title, {
      headers: new HttpHeaders()
      //todo Authorization avec token etc
    })
  }

  getSereisByCategory(categoryName:string){
    return this.http.get<Serie[]>(this.configUrl + categoryName, {
      headers: new  HttpHeaders()
    })
  }

  getSeriesByKeyword(keywordName:string){
    return this.http.get<Serie[]>(this.configUrl + keywordName, {
      headers: new  HttpHeaders()
    })
  }

  getSeriesByYear(year:number){
    return this.http.get<Serie[]>(this.configUrl + year, {
      headers: new  HttpHeaders()
    })
  }

  getSeriesByCastMember(castMemberName:string){
    return this.http.get<Serie[]>(this.configUrl + castMemberName , {
      headers: new HttpHeaders()
    })
  }
}
