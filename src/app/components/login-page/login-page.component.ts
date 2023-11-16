import {Component, OnDestroy} from '@angular/core';
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
    name: string = "";
    password: string = "";
  };

  userSub: Subscription | undefined;

  formparametersSubscription: Subscription
  formMode:string = "authenticate"

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginServiceService) {
    this.formparametersSubscription = this.route.queryParamMap.subscribe((params : ParamMap) => {
      this.formMode = params.get('mode') ?? "authenticate"
        switch (this.formMode){
          case 'register':



      }
    } )

  }

  login(ngForm:NgForm) {
    this.loginService.authenticate(this.user
    );
    console.log(ngForm.form.value)
  }

  ngOnDestroy() {
  }


}
