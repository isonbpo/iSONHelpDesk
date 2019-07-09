import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { TeamComponent } from './Team.component';
import { TeamRoutingModule } from './Team-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
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
    
    TeamRoutingModule,
    ChartsModule,
    BsDropdownModule

  ],
  declarations: [ TeamComponent ]
})
export class TeamModule { }
