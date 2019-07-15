import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SoftwareTypeComponent } from './SoftwareType.component';
import { SoftwareTypeRoutingModule } from './SoftwareType-routing.module';
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
    
    SoftwareTypeRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ SoftwareTypeComponent ]
})
export class SoftwareTypeModule { }
