import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SoftwareTypeComponent } from './SoftwareType.component';
import { SoftwareTypeRoutingModule } from './SoftwareType-routing.module';

@NgModule({
  imports: [
    SoftwareTypeRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ SoftwareTypeComponent ]
})
export class SoftwareTypeModule { }
