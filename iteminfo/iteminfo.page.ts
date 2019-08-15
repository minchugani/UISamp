import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteminfo',
  templateUrl: './iteminfo.page.html',
  styleUrls: ['./iteminfo.page.scss'],
})
export class IteminfoPage implements OnInit {
  rows:any 
  constructor() {  this.rows = []
  
}

  ngOnInit() {
  }
  add()
  {
    this.rows.push({});
    
  };
  del()
  {
  let i1 : number ;
  for(var i = 0 ; i<this.rows.length; i++) 
  {
   if(this.rows[i].check == true) {
     this.rows.splice(i , 1) ;
    }
  }
  };
  

}
