import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NavigationServiceService } from "../../services/navigation-service.service";
import { MovieService } from './MovieService'; 

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit, OnChanges {
  @Input() movieName: string;
  currentMovie: any; 

  constructor(private nav: NavigationServiceService, private movieService: MovieService) {
    
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.movieName && !changes.movieName.firstChange) {
      this.getMovieDetails();
    }
  }

  private getMovieDetails(): void {
    const that = this;

    this.movieService
      .getMovieDetails(this.movieName) 
      .subscribe({
        next(value) {
          that.currentMovie = value;
        },
        error(err) {
          console.error(err);
          that.currentMovie = null;
        },
      });
  }
}
