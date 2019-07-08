import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.scss']
})
export class ActorsListComponent implements OnInit {

  actors;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getActors()
    .subscribe(data=>{
      this.actors = data;
      this.actors = this.actors.data;
    })
  }

}
