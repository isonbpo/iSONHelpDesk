import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { CountryComponent } from './Country.component';
import { CountryRoutingModule } from './Country-routing.module';

@NgModule({
  imports: [
    CountryRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ CountryComponent ]
})
export class CountryModule { }