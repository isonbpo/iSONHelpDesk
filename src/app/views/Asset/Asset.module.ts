import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AssetComponent } from './Asset.component';
import { AssetRoutingModule } from './Asset-routing.module';

@NgModule({
  imports: [
    AssetRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ AssetComponent ]
})
export class AssetModule { }
