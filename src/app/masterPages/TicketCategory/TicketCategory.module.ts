import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { TicketCategoryComponent } from './TicketCategory.component';
import { TicketCategoryRoutingModule } from './TicketCategory-routing.module';

@NgModule({
  imports: [
    TicketCategoryRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ TicketCategoryComponent ]
})
export class TicketCategoryModule { }
