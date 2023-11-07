import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import  {Observable} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Config} from "../config/Config";



@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) {
    let headers = {
      'Authorization' : `Bearer $this.getToken()}`
    }
  }

 // getToken(){
//
 //   return token
 // }

  configUrl = 'assets/config.json'

  getConfig(){
    return this.http.get<Config>(this.configUrl)
  }

}
