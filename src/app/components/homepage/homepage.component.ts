import { Component } from '@angular/core';
import {NavigationServiceService} from "../../services/navigation-service.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private nav:NavigationServiceService) {
    console.log(nav.Testvalue)
  }



}
