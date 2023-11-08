import { Component } from '@angular/core';
import {NavigationServiceService} from "../../services/navigation-service.service";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  constructor(private nav: NavigationServiceService) {

  }

}
