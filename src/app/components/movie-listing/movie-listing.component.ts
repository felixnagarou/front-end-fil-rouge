import {Component, OnInit} from '@angular/core';
import {Movie} from "../../models/Movie";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movie-listing',
  templateUrl: './movie-listing.component.html',
  styleUrls: ['./movie-listing.component.css']
})
export class MovieListingComponent implements OnInit{

  movies:Movie[] = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit(){
    this.movieService.getAllMovies().subscribe(data => {
      this.movies = data
    })
  }

}
