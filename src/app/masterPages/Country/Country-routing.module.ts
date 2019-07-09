import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryComponent } from './Country.component';

const routes: Routes = [
  {
    path: '',
    component: CountryComponent,
    data: {
      title: 'Country'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule {}
