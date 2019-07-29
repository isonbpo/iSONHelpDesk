import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablesComponent } from './tables/tables.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatSortModule, MatTableModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatOptionModule, MatSelectModule, MatPaginator, MatDialogModule, MatIconModule, MatExpansionModule, MatTabsModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatListModule } from '@angular/material';
import { DepartmentComponent } from './masterPages/department/department.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DesignationComponent } from './masterPages/designation/designation.component';
import { MasterPagesService } from './masterPages/shared/master-pages.service';
import { TeamComponent } from './masterPages/Team/team.component';
import { RoleComponent } from './masterPages/role/role.component';
import { AssetCategoryComponent } from './masterPages/assetCategory/assetCategory.component';
import { AssetSubCategoryComponent } from './masterPages/AssetSubCategory/assetSubCategory.component';
import { ProductComponent } from './masterPages/Product/product.component';
import { ProductTypeComponent } from './masterPages/ProductType/productType.component';
import { SoftwareTypeComponent } from './masterPages/SoftwareType/SoftwareType.component';
import { SoftwareCategoryComponent } from './masterPages/SoftwareCategory/SoftwareCategory.component';
import { TimezoneComponent } from './masterPages/TimeZone/TimeZone.component';
import { LocationGeneralComponent } from './commonViews/location-general/location-general.component';
import { CommonDepartmentComponent } from './commonViews/common-department/common-department.component';
import { CommonDesignationComponent } from './commonViews/common-designation/common-designation.component';
import { CommonTeamComponent } from './commonViews/common-team/common-team.component';
import { CommonAssetsComponent } from './commonViews/common-assets/common-assets.component';
import { CommonAssetHistoryComponent } from './commonViews/common-asset-history/common-asset-history.component';
import { CommonContactsComponent } from './commonViews/common-contacts/common-contacts.component';
import { CommonDocumentsComponent } from './commonViews/common-documents/common-documents.component';
import { CommonHistoryComponent } from './commonViews/common-history/common-history.component';
import { CommonTicketComponent } from './commonViews/common-ticket/common-ticket.component';
import { GlobalAddComponent } from './commonViews/global-add/global-add.component';
import { LocationViewComponent } from './view/locationView/locationView.component';
import { LocationListComponent } from './View/locationView/location-list/location-list.component';
import { ContactsViewComponent } from './view/contactsView/contactsView.component';
import { ContactsListComponent } from './view/contactsView/contacts-list/contacts-list.component';
import { AssetsViewComponent } from './view/assetsView/assetsView.component';
import { AssetsListComponent } from './view/assetsView/assets-list/assets-list.component';
import { TicketViewComponent } from './view/ticketView/ticketView.component';
import { TicketListComponent } from './view/ticketView/ticket-list/ticket-list.component';
import { DocumentViewComponent } from './view/documentView/documentView.component';
import { DocumentListComponent } from './view/documentView/document-list/document-list.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    TablesComponent,
    DepartmentComponent,
    DesignationComponent,
    TeamComponent,
    RoleComponent,
    AssetCategoryComponent,
    AssetSubCategoryComponent,
    ProductComponent,
    ProductTypeComponent,
    SoftwareTypeComponent,
    SoftwareCategoryComponent,
    TimezoneComponent,
    LocationGeneralComponent,
    CommonDepartmentComponent,
    CommonDesignationComponent,
    CommonTeamComponent,
    CommonAssetsComponent,
    CommonAssetHistoryComponent,
    CommonContactsComponent,
    CommonDocumentsComponent,
    CommonHistoryComponent,
    CommonTicketComponent,
    GlobalAddComponent,
    LocationViewComponent,
    LocationListComponent,
    ContactsViewComponent,
    ContactsListComponent,
    AssetsViewComponent,
    AssetsListComponent,
    TicketViewComponent,
    TicketListComponent,
    DocumentViewComponent,
    DocumentListComponent
    ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    NoopAnimationsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatExpansionModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule
    ],
  entryComponents:[],
  providers: [MasterPagesService],
  bootstrap: [AppComponent]
 
})
export class AppModule { }