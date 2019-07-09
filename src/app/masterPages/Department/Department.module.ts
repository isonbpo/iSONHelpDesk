import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { DepartmentComponent } from './Department.component';
import { DepartmentRoutingModule } from './Department-routing.module';
import { MasterPagesService } from '../shared/master-pages.service';

import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    ChartsModule,
    BsDropdownModule,
    HttpClientModule,
    FormsModule,
    ToastrModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
    
  ],
  declarations: [ DepartmentComponent],
  providers:[MasterPagesService]
})
export class DepartmentModule { }
