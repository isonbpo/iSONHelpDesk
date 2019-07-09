import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoftwareCategoryComponent } from './SoftwareCategory.component';

const routes: Routes = [
  {
    path: '',
    component: SoftwareCategoryComponent,
    data: {
      title: 'Software Category'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareCategoryRoutingModule {}
