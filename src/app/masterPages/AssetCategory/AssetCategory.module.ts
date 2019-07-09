import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AssetCategoryComponent } from './AssetCategory.component';
import { AssetCategoryRoutingModule } from './AssetCategory-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    AssetCategoryRoutingModule,
    ChartsModule,
    BsDropdownModule,

    CommonModule,
    HttpClientModule,
    FormsModule,
    ToastrModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
  
  ],
  declarations: [ AssetCategoryComponent ]
})
export class AssetCategoryModule { }
