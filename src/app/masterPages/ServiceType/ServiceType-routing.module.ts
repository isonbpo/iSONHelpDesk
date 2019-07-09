import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceTypeComponent } from './ServiceType.component';

const routes: Routes = [
  {
    path: '',
    component: ServiceTypeComponent,
    data: {
      title: 'Service Type'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceTypeRoutingModule {}
