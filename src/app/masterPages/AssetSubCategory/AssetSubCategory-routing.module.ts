import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetSubCategoryComponent } from './AssetSubCategory.component';

const routes: Routes = [
  {
    path: '',
    component: AssetSubCategoryComponent,
    data: {
      title: 'Asset Sub Category'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetSubCategoryRoutingModule {}
