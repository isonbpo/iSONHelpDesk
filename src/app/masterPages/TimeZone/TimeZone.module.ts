import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { TimeZoneComponent } from './TimeZone.component';
import { TimeZoneRoutingModule } from './TimeZone-routing.module';

@NgModule({
  imports: [
    TimeZoneRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ TimeZoneComponent ]
})
export class TimeZoneModule { }
