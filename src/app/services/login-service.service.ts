import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private authUrl:string;

  constructor(private http:HttpClient) {
    this.authUrl = "http://localhost:8080/auth"
  }

  addUser(user:User){
    return this.http.post<User>()
  }
}
