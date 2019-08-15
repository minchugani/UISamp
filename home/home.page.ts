import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { resolve } from 'url';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
information: any;
  constructor(public navctrl:NavController , private http:HttpClient, private router: Router) {
    this.information = [{ "name" : "Header"},
                        {"name": "Item"
                      },
                    {"name" : "Stores"}]
  //  let localdata =  this.http.get('assets/Maininfo.json').subscribe(data=> { 
      // this.information = data ;
      console.log(this.information[0]); 
    // }
    err => {
      console.log(err)
    } ;
    

}
toggleSection(i) {
  this.information[i].open =  !this.information[i].open 
  if (this.information[i].open == true && this.information[i].name == "Item") {
    this.router.navigate(['iteminfo']) ;
  }
}
}
