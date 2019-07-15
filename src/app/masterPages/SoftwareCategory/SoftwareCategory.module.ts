import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SoftwareCategoryComponent } from './SoftwareCategory.component';
import { SoftwareCategoryRoutingModule } from './SoftwareCategory-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ToastrModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
    SoftwareCategoryRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ SoftwareCategoryComponent ]
})
export class SoftwareCategoryModule { }
