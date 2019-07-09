import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketComponent } from './Ticket.component';

const routes: Routes = [
  {
    path: '',
    component: TicketComponent,
    data: {
      title: 'Ticket'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule {}
