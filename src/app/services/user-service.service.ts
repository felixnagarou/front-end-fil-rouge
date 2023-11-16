import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) {

  }
    configUrl:string = "assets/congig.json"



  getUserById(userId:string){
    return this.http.get<User>(this.configUrl + userId, {
      headers: new HttpHeaders()
    })
  }


  addUser(user:User){
    return this.http.put<User>(this.configUrl + "auth/register", user, {
      headers: new HttpHeaders()
    })
  }


}
