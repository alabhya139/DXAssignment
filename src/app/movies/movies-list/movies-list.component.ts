import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  moviesCollection;
  posterUrl: String;
  castingDetails = [];
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getMovies()
    .subscribe(data=>{
      this.moviesCollection = data;
      this.moviesCollection = this.moviesCollection.data;

      this.moviesCollection.forEach(element => {
        this.castingDetails.push(JSON.parse(element.cast[0]))
      });

      console.log(this.moviesCollection)
    })
  }
}
