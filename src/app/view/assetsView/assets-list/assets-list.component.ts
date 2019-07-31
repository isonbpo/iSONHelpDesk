import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { AssetsView } from '../shared/assets-view.model';
import { AssetsViewServiceService } from '../shared/assets-view-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.scss']
})
export class AssetsListComponent implements OnInit {
  displayedColumns: string[] = ['AssetStatus','AssetProId','AssetProName','AssetSerialNo','OwnerName','RelatedToName','WarrantyAmCtDate','WarrantyAmcEndDate','AssetInstallationDate','AssetSaleDate','RelatedTo'];
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  //@ViewChild('regForm') largeModal : ModalDirective;

  dptlist: AssetsView[];
  dataavailbale: Boolean = false;
  tempdpt: AssetsView
  
  dataSource :any;
   

  constructor(private Service:AssetsViewServiceService, private route:Router, public dialog: MatDialog){}
  


  ngOnInit() {
    //this.dataSource.sort = this.sort;
    this.LoadData();
  }
  
  LoadData() {
    this.Service.getAllAssetsList().subscribe(  
      res => {  
        this.dataSource = new MatTableDataSource(this.dptlist);  
        this.dataSource.data = res;  
        this.Service.formModelAsset.reset();
      },
      err => {
        console.log(err);
      });
  }

}
