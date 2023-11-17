import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Movie} from "../models/Movie";
import {PostAPIResponse} from "../models/PostAPIResponse";
import {Category} from "../models/Category";

@Injectable({
  providedIn: 'root'
})
export class MovieService {



  constructor(private http:HttpClient) {
  }
    configurl = "http://localhost:8080/api/v1/private/search/movieList"

  testUrl:string = "http://localhost:8080/api/v1/private/home/search/Inception"


  getMovie(){
    return this.http.get<Movie>(this.testUrl)
  }

  getAllMovies(){
    return this.http.get<Movie[]>(this.configurl ,{
      headers: new HttpHeaders()
    })
  }

  postMovie(){
    return this.http.post<PostAPIResponse>(this.configurl, {
    })
  }

  getMoviesByTitle(title:string){
    return this.http.get<Movie[]>(this.configurl + title, {
      headers: new HttpHeaders()
      //todo Authorization avec token etc
    })
  }

  getMoviesByCategory(categoryName:string){
    return this.http.get<Movie[]>(this.configurl + categoryName, {
      headers: new  HttpHeaders()
    })
  }

  getMoviesByKeyword(keywordName:string){
    return this.http.get<Movie[]>(this.configurl + keywordName, {
      headers: new  HttpHeaders()
    })
  }

  getMoviesByYear(year:number){
    return this.http.get<Movie[]>(this.configurl + year, {
      headers: new  HttpHeaders()
    })
  }

  getMoviesByCastMember(castMemberName:string){
    return this.http.get<Movie[]>(this.configurl + castMemberName , {
      headers: new HttpHeaders()
    })
  }

  //ADMIN !!

  deleteMovieById(id:string){
    return this.http.delete<Movie>(this.configurl + id, {
      headers:new  HttpHeaders()
      //admin headers
    })
  }


  addMovie(){
    return this.http.put<Movie>(this.configurl, {
      headers: new  HttpHeaders()
      //admin headers
    })
  }

}
