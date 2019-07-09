import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactUserComponent } from './ContactUser.component';

const routes: Routes = [
  {
    path: '',
    component: ContactUserComponent,
    data: {
      title: 'Contact User'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUserRoutingModule {}
