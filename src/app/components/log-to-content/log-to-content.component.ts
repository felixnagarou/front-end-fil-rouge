import { Component } from '@angular/core';
import {TokenManagerService} from "../../services/security/token-manager.service";
import {Subscription} from "rxjs";
import {User} from "../../models/User";
import {LoginServiceService} from "../../services/login-service.service";

@Component({
  selector: 'app-log-to-content',
  templateUrl: './log-to-content.component.html',
  styleUrls: ['./log-to-content.component.css']
})
export class LogToContentComponent {
  isAuthentified:boolean = false;
  user: User | null = null
  userSub: Subscription | undefined

  constructor(private loginService:LoginServiceService) {
  }

  showComponent(isAuthentified:boolean){
    this.isAuthentified = isAuthentified
    this.userSub = this.loginService.user$.subscribe(user => this.user = user)
  }

 //ngOnDestroy(): void {
 //  this.userSub?.unsubscribe()
 //  this.loginService.logOut()
 //}

 // logIn() {
 //   this.loginService.logIn()
 // }

  logOut() {
    this.loginService.logOut()
  }

}
