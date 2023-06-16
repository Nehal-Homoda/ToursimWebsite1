import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripsComponent } from './trips/trips.component';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    TripsComponent
  ],
  imports: [
    CommonModule,CardModule
  ]
})
export class TripModule { }
