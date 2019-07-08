import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';

import { NgxTypeaheadModule } from 'ngx-typeahead';
import { ActorsListComponent } from '../actors/actors-list/actors-list.component';
import { ActorsModule } from '../actors/actors.module';

@NgModule({
  declarations: [MoviesListComponent, AddMovieComponent, EditMovieComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ReactiveFormsModule,
    NgxTypeaheadModule,
    ActorsModule
  ]
})
export class MoviesModule { }
