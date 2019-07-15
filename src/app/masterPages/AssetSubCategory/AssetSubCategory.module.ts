import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AssetSubCategoryComponent } from './AssetSubCategory.component';
import { AssetSubCategoryRoutingModule } from './AssetSubCategory-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ToastrModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
    
    AssetSubCategoryRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ AssetSubCategoryComponent ]
})
export class AssetSubCategoryModule { }
