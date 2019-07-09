import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetComponent } from './Asset.component';

const routes: Routes = [
  {
    path: '',
    component: AssetComponent,
    data: {
      title: 'Asset'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetRoutingModule {}
