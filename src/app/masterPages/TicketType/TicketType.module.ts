import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { TicketTypeComponent } from './TicketType.component';
import { TicketTypeRoutingModule } from './TicketType-routing.module';

@NgModule({
  imports: [
    TicketTypeRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ TicketTypeComponent ]
})
export class TicketTypeModule { }
