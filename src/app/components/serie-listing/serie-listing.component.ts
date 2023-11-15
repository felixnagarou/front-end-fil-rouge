import { Component } from '@angular/core';
import {Movie} from "../../models/Movie";
import {MovieService} from "../../services/movie.service";
import {Serie} from "../../models/Serie";
import {SerieServiceService} from "../../services/serie-service.service";

@Component({
  selector: 'app-serie-listing',
  templateUrl: './serie-listing.component.html',
  styleUrls: ['./serie-listing.component.css']
})
export class SerieListingComponent {
  series:Serie[] = [];

  constructor(private serieService: SerieServiceService) {
  }

  ngOnInit(){
    this.serieService.getAllSeries().subscribe(data => {
      this.series = data
    })
  }

}
