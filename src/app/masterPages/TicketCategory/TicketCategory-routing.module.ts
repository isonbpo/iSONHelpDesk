import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketCategoryComponent } from './TicketCategory.component';

const routes: Routes = [
  {
    path: '',
    component: TicketCategoryComponent,
    data: {
      title: 'Ticket Category'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketCategoryRoutingModule {}
