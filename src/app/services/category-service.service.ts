import { Injectable } from '@angular/core';
import {Category} from "../models/Category";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http:HttpClient) {
  }
    configurl:string = "assets/config.json"


  getAllCategories(){
    return this.http.get<Category[]>(this.configurl + "categories", {
      headers:new  HttpHeaders()
    })
  }

  getCategoryByName(name:string){
    return this.http.get<Category>(this.configurl + name, {
      headers:new  HttpHeaders()
    })
  }

}
