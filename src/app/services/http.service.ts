import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = "http://localhost:3000/api/v1/"

  constructor(private http: HttpClient) { }

  public getMovies(){
    return this.http.get(`${this.baseUrl}movies/get-movies`);
  }

  public saveMovies(payload) {
    let formData = new FormData;
    formData.append("movieName",payload.movieName);
    formData.append("moviePlot",payload.moviePlot);
    formData.append("moviePoster",payload.moviePoster);
    formData.append("yearOfRelease",payload.yearOfRelease);
    formData.append("cast",JSON.stringify(payload.Cast));

    return this.http.post(`${this.baseUrl}movies/save-movie`,formData);
  }

  public updateMovies(payload) {

  }

  public getActors() {
    return this.http.get(`${this.baseUrl}actors/get-actors`);
  }
}
