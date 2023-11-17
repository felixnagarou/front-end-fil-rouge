import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {User} from "../../models/User";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {LoginServiceService} from "../../services/login-service.service";
import {Subscription} from "rxjs";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnDestroy{
  user: User  = new class implements User {
    username: string = "";
    password: string = "";
  };


  @Output()
  onSubmitAuthenticateEvent = new EventEmitter

  @Output()
  onSubmitRegisterEvent = new EventEmitter

  formState :string = "authenticate"

  onAuthenticate(){
    this.formState = "authenticate"
  }
  onRegister(){
    this.formState = "register"
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginServiceService) {

  }

  login(ngForm:NgForm) {
    this.formState == 'authenticate' ? this.loginService.authenticate(ngForm.value
    ) : this.loginService.registerUser(ngForm.value) ;
    console.log(ngForm.form.value)
  }


  ngOnDestroy() {
  }


}
