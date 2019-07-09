import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { LocationComponent } from './Location.component';
import { LocationRoutingModule } from './Location-routing.module';

@NgModule({
  imports: [
    LocationRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ LocationComponent ]
})
export class LocationModule { }
