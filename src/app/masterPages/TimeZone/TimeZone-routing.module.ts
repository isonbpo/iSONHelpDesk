import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimeZoneComponent } from './TimeZone.component';

const routes: Routes = [
  {
    path: '',
    component: TimeZoneComponent,
    data: {
      title: 'Time Zone'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeZoneRoutingModule {}
