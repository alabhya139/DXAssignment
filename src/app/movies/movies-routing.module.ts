import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesListComponent
  },
  {
    path: 'add-movies',
    component: AddMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
