import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpTimeComponent } from './UpTime.component';

const routes: Routes = [
  {
    path: '',
    component: UpTimeComponent,
    data: {
      title: 'UpTime'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpTimeRoutingModule {}
