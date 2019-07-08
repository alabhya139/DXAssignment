import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorsRoutingModule } from './actors-routing.module';
import { ActorsListComponent } from './actors-list/actors-list.component';
import { AddActorComponent } from './add-actor/add-actor.component';
import { EditActorComponent } from './edit-actor/edit-actor.component';

@NgModule({
  declarations: [ActorsListComponent, AddActorComponent, EditActorComponent],
  imports: [
    CommonModule,
    ActorsRoutingModule
  ],
  exports: [
    ActorsListComponent
  ]
})
export class ActorsModule { }
