import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/User";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenManagerService {


  constructor(private http:HttpClient) { }







}

