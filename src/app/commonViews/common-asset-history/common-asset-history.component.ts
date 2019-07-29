import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-asset-history',
  templateUrl: './common-asset-history.component.html',
  styleUrls: ['./common-asset-history.component.scss']
})
export class CommonAssetHistoryComponent implements OnInit {
  displayedColumns: string[] = ['AssetStatus','ProductName','TagNumber','Account Name','InstallationDate','Warranty','StartDate','WarrantyEndDate','SaleDate','CreatedBy','CreatedDate','Owner','Account','Category','SubCategory','ProductType','AssetVenderName','SoftwareType','SoftwareCategory'];
  constructor() { }

  ngOnInit() {
  }

}
