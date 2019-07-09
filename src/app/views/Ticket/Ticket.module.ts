import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { TicketComponent } from './Ticket.component';
import { TicketRoutingModule } from './Ticket-routing.module';

@NgModule({
  imports: [
    TicketRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ TicketComponent ]
})
export class TicketModule { }
