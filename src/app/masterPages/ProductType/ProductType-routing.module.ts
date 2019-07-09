import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductTypeComponent } from './ProductType.component';

const routes: Routes = [
  {
    path: '',
    component: ProductTypeComponent,
    data: {
      title: 'Product Type'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductTypeRoutingModule {}
