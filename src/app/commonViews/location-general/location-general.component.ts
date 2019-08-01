import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/shared/global.model';
import { GlobalService } from 'src/app/shared/global.service';

@Component({
  selector: 'app-location-general',
  templateUrl: './location-general.component.html',
  styleUrls: ['./location-general.component.scss']
})
export class LocationGeneralComponent implements OnInit {

   dptlist: Global[];
   dataavailbale: Boolean = false;
   tempdpt: Global
   dataSource :any;
   

   constructor(private Service:GlobalService){}

  ngOnInit() {
    this.Service.getGlobal();
    
  }
  
}
