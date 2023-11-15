import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Person} from "../models/Person";

@Injectable({
  providedIn: 'root'
})
export class CastServiceService {

  constructor(private http:HttpClient) {

  }
    configUrl: string = "assets/config.json"


  getCastByMovieid(movieId:string){
    return this.http.get<Person>(this.configUrl + movieId,{
      headers: new  HttpHeaders()
    })
}
}
