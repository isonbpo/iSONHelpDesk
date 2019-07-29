import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.scss']
})
export class AssetsListComponent implements OnInit {
  displayedColumns: string[] = ['AssetStatus','AssetProId','AssetProName','AssetSerialNo','OwnerName','RelatedToName','WarrantyAmCtDate','WarrantyAmcEndDate','AssetInstallationDate','AssetSaleDate','RelatedTo'];
  constructor() { }

  ngOnInit() {
  }

}
