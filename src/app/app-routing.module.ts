import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CityComponent } from './city/city/city.component';
import { AgencyComponent } from './agency/agency/agency.component';
import { TripsComponent } from './trip/trips/trips.component';

const routes:Routes=[
  {path:'home',component:HomeComponent},
  
  {path:'aboutUs',component:AboutUsComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'city',component:CityComponent},
  {path:'agency',component:AgencyComponent},
  {path:'trip',component:TripsComponent},
  
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
