import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetCategoryComponent } from './AssetCategory.component';

const routes: Routes = [
  {
    path: '',
    component: AssetCategoryComponent,
    data: {
      title: 'Asset Category'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetCategoryRoutingModule {}
