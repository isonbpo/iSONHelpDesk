import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ContactUserComponent } from './ContactUser.component';
import { ContactUserRoutingModule } from './ContactUser-routing.module';

@NgModule({
  imports: [
    ContactUserRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ ContactUserComponent ]
})
export class ContactUserModule { }
