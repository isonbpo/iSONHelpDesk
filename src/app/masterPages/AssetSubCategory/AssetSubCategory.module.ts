import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AssetSubCategoryComponent } from './AssetSubCategory.component';
import { AssetSubCategoryRoutingModule } from './AssetSubCategory-routing.module';

@NgModule({
  imports: [
    AssetSubCategoryRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ AssetSubCategoryComponent ]
})
export class AssetSubCategoryModule { }
