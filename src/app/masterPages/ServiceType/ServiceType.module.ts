import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ServiceTypeComponent } from './ServiceType.component';
import { ServiceTypeRoutingModule } from './ServiceType-routing.module';

@NgModule({
  imports: [
    ServiceTypeRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ ServiceTypeComponent ]
})
export class ServiceTypeModule { }
