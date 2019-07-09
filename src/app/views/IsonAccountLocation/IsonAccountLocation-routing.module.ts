import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'IsonAccountLocation'
    },
    children: [
      {
        path: '',
        redirectTo: 'cards'
      },     
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms'
        }
      }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IsonAccountLocationRoutingModule {}
