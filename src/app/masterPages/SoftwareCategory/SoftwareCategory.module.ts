import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SoftwareCategoryComponent } from './SoftwareCategory.component';
import { SoftwareCategoryRoutingModule } from './SoftwareCategory-routing.module';

@NgModule({
  imports: [
    SoftwareCategoryRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ SoftwareCategoryComponent ]
})
export class SoftwareCategoryModule { }
