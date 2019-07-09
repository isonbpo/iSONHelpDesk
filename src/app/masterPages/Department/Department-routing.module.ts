import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartmentComponent } from './Department.component';

const routes: Routes = [
  {
    path: '',
    component: DepartmentComponent,
    data: {
      title: 'Department'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule {}
