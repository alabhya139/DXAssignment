import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  private addForm: FormGroup;
  selectedFile: File;
  response: any;
  castingActors = [];
  actorArray = [];

  public url = 'http://localhost:3000/api/v1/actors/search_actors';
  public search = "No Actors Found"
  constructor(private formBuilder: FormBuilder, private httpService: HttpService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      movieName:['', Validators.required],
      yearOfRelease: ['',Validators.required],
      moviePlot: [''],
      Cast: [],
      moviePoster:[]
    })
  }

  onSubmit(formValue){
    this.httpService.saveMovies(formValue)
    .subscribe(data=>{
      this.response = data;
      if(this.response.status === 200){
        this.toastr.success("Success",this.response.message);
        this.router.navigate(['/movies']);
      }else{
        this.toastr.error("Error",this.response.message);
      }
    })
  }

  OnFileChange(event){
    this.addForm.controls.moviePoster.setValue(event.target.files[0]);
    this.addForm.controls.moviePoster.updateValueAndValidity();
  }

  handleResultSelected(result) {
    this.search = result;

    let actorDetails = {
      actorId: result.actorId,
      actorName: result.actorName
    }
    this.castingActors.push(actorDetails);
    this.addForm.controls.Cast.setValue(this.castingActors);
    this.addForm.controls.Cast.updateValueAndValidity();
  }

}
