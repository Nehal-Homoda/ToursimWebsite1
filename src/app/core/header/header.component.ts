import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import {ButtonModule} from 'primeng/button';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showSearchForms:boolean=false;
  searchText:string="";
  constructor(private router:Router){
    
  }
  showMenu(){
    
  }
  showSearchForm(){
    this.showSearchForms=true;
  }
  takeUserInput(e:any){
    this.searchText=e.target.value;
  }
  sendSearchReq(){
   console.log(this.searchText);
  }
  hideForm(){
    this.showSearchForms=false;
  }
  goToTrip(){
    this.router.navigateByUrl(`/trip?searchText=${this.searchText}`);
    this.showSearchForms=false;
  }
}

