import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Keyword} from "../models/Keyword";

@Injectable({
  providedIn: 'root'
})
export class KeywordServiceService {

  constructor(private  http:HttpClient) {

  }
    configurl:string = "assets/config.json"


  getAllKeywords(){
    return this.http.get<Keyword[]>(this.configurl + "keywords", {
      headers: new  HttpHeaders()
    })
  }

  getKeywordbyName(keywordName:string){
    return this.http.get<Keyword>(this.configurl + keywordName, {
      headers: new  HttpHeaders()
    })
  }

}
