import {Component, OnInit} from '@angular/core';
import {Serie} from "../../models/Serie";
import {SerieServiceService} from "../../services/serie-service.service";

@Component({
  selector: 'app-serie-listing',
  templateUrl: './serie-listing.component.html',
  styleUrls: ['./serie-listing.component.css']
})
export class SerieListingComponent implements OnInit{
  series:Serie[] = [];

  constructor(private serieService: SerieServiceService) {
  }

  ngOnInit(){
    this.serieService.getAllSeries().subscribe(data => {
      this.series = data
    })
  }

}
