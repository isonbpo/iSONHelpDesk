import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketTypeComponent } from './TicketType.component';

const routes: Routes = [
  {
    path: '',
    component: TicketTypeComponent,
    data: {
      title: 'Ticket Type'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketTypeRoutingModule {}
