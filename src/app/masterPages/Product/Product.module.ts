import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ProductComponent } from './Product.component';
import { ProductRoutingModule } from './Product-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ToastrModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
    
    ProductRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ ProductComponent ]
})
export class ProductModule { }
