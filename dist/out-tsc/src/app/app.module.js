import * as tslib_1 from "tslib";
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule, MatTableModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatOptionModule, MatSelectModule, MatDialogModule, MatIconModule, MatExpansionModule, MatTabsModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatListModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule } from '@angular/material';
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
import { ContactsGeneralComponent } from './commonViews/contacts-general/contacts-general.component';
import { LocationGlobalComponent } from './commonViews/location-global/location-global.component';
import { ContactsGlobalComponent } from './commonViews/contacts-global/contacts-global.component';
import { AssetsGlobalComponent } from './commonViews/assets-global/assets-global.component';
import { AssetsGeneralComponent } from './commonViews/assets-general/assets-general.component';
import { DocumentsGlobalComponent } from './commonViews/documents-global/documents-global.component';
import { DocumentsGeneralComponent } from './commonViews/documents-general/documents-general.component';
import { TicketGeneralComponent } from './commonViews/ticket-general/ticket-general.component';
import { TicketGlobalComponent } from './commonViews/ticket-global/ticket-global.component';
import { TicketCategoryComponent } from './masterPages/ticketCategory/ticketCategory.component';
import { TicketSubCategoryComponent } from './masterPages/ticketSubCategory/ticketSubCategory.component';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { DepartmentDialogBoxComponent } from './masterPages/department/department-dialog-box/department-dialog-box.component';
import { DesignationtDialogBoxComponent } from './masterPages/designation/designationt-dialog-box/designationt-dialog-box.component';
import { RoleDialogBoxComponent } from './masterPages/role/role-dialog-box/role-dialog-box.component';
import { AssetCategoryDialogBoxComponent } from './masterPages/assetCategory/asset-category-dialog-box/asset-category-dialog-box.component';
import { AssetSubCategoryDialogBoxComponent } from './masterPages/assetSubCategory/asset-sub-category-dialog-box/asset-sub-category-dialog-box.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
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
            LocationViewComponent,
            LocationListComponent,
            ContactsViewComponent,
            ContactsListComponent,
            AssetsViewComponent,
            AssetsListComponent,
            TicketViewComponent,
            TicketListComponent,
            DocumentViewComponent,
            DocumentListComponent,
            ContactsGeneralComponent,
            LocationGlobalComponent,
            ContactsGlobalComponent,
            AssetsGlobalComponent,
            AssetsGeneralComponent,
            DocumentsGlobalComponent,
            DocumentsGeneralComponent,
            TicketGeneralComponent,
            TicketGlobalComponent,
            TicketCategoryComponent,
            TicketSubCategoryComponent,
            DepartmentDialogBoxComponent,
            DesignationtDialogBoxComponent,
            RoleDialogBoxComponent,
            AssetCategoryDialogBoxComponent,
            AssetSubCategoryDialogBoxComponent
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
            MatToolbarModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatRadioModule,
            MatCheckboxModule,
            A11yModule,
            BidiModule,
            ObserversModule,
            OverlayModule,
            PlatformModule,
            PortalModule,
            ScrollDispatchModule,
            CdkStepperModule,
            CdkTableModule,
        ],
        entryComponents: [
            DepartmentDialogBoxComponent,
            DesignationtDialogBoxComponent,
            RoleDialogBoxComponent,
            AssetCategoryDialogBoxComponent,
            AssetSubCategoryDialogBoxComponent
        ],
        providers: [MasterPagesService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map