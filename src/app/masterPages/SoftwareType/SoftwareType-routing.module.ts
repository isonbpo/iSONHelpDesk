import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoftwareTypeComponent } from './SoftwareType.component';

const routes: Routes = [
  {
    path: '',
    component: SoftwareTypeComponent,
    data: {
      title: 'Software Type'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareTypeRoutingModule {}
