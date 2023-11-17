import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/User";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  public authUrl:string;

  user$ = new BehaviorSubject<User | null>(null)

  constructor(private http:HttpClient,
  private router:Router) {
    this.authUrl = "http://localhost:8080/api/v1/auth"
  }

  registerUser(user:User){
    return this.http.post<User>(this.authUrl + "/register", user, {
      headers:new HttpHeaders()


    }).subscribe(userData => this.user$.next(userData))
  }

  authenticate(user:User){
    return this.http.post<User>(this.authUrl + "/authenticate", user, {


      headers: {"Authorization" : "Bearer" + this.getAuthToken() }
    }).subscribe(userData => this.user$.next(userData))


  }

    getAuthToken():string | null{
        return window.localStorage.getItem("token");
    }

    setAuthToken(token:string | null){
        token !== null ? window.localStorage.setItem("token",token)
            :window.localStorage.removeItem("token");
    }



    logOut() {
        this.user$.next(null)
        localStorage.removeItem('token')
        //this.router.navigate(['/'])
    }





}
