import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { UpTimeComponent } from './UpTime.component';
import { UpTimeRoutingModule } from './UpTime-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    UpTimeRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ModalModule.forRoot()
  ],
  declarations: [ UpTimeComponent ]
})
export class UpTimeModule { }
