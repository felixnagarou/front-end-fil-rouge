import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {NavigationServiceService} from "../../services/navigation-service.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy{
  constructor(private nav:NavigationServiceService) {
    console.log(nav.Testvalue)
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }


}
