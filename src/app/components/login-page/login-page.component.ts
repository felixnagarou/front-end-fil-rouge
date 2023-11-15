import { Component } from '@angular/core';
import {User} from "../../models/User";
import {ActivatedRoute, Router} from "@angular/router";
import {UserServiceService} from "../../services/user-service.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  user: User;

  constructor(

    private userService:UserServiceService

  ) {
    this.user = new class implements User {
      set id(value: string) {
        this.id = value;
      }

      set name(value: string) {
        this.name = value
      }

      set password(value: string){
        this.password = value
      }

    }
  }

  onSubmit(){
    this.userService.addUser(this.user)
  }

}
