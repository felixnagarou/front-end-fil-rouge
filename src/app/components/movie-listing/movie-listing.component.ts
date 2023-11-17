import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/Movie";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movie-listing',
  templateUrl: './movie-listing.component.html',
  styleUrls: ['./movie-listing.component.css']
})
export class MovieListingComponent implements OnInit{
  movies:Movie[] = [];
  @Input()
  public movieTable= new Map<string, Movie>([])
  movie:Movie = {
    banner: "",
    categories: [],
    contentRating: "",
    evaluations: [],
    keywords: [],
    length: 0,
    plot: "",
    rating: 0,
    title: "",
    trailer: "",
    year: 0
  }

  constructor(private movieService: MovieService) {
  }

  ngOnInit(){
    this.movieService.getMovie().subscribe(data => {
      this.movie = data
      this.movieTable.set(this.movie.title, this.movie)
    })
  }

}
