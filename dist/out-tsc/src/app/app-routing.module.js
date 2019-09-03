import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablesComponent } from './tables/tables.component';
import { DepartmentComponent } from './masterPages/department/department.component';
import { DesignationComponent } from './masterPages/designation/designation.component';
import { TeamComponent } from './masterPages/Team/team.component';
import { RoleComponent } from './masterPages/role/role.component';
import { AssetCategoryComponent } from './masterPages/assetCategory/assetCategory.component';
import { AssetSubCategoryComponent } from './masterPages/AssetSubCategory/assetSubCategory.component';
import { ProductComponent } from './masterPages/Product/product.component';
import { ProductTypeComponent } from './masterPages/ProductType/productType.component';
import { SoftwareTypeComponent } from './masterPages/SoftwareType/SoftwareType.component';
import { SoftwareCategoryComponent } from './masterPages/SoftwareCategory/SoftwareCategory.component';
import { TimezoneComponent } from './masterPages/TimeZone/TimeZone.component';
import { LocationViewComponent } from './view/locationView/locationView.component';
import { ContactsViewComponent } from './view/contactsView/contactsView.component';
import { AssetsViewComponent } from './view/assetsView/assetsView.component';
import { TicketViewComponent } from './view/ticketView/ticketView.component';
import { DocumentViewComponent } from './view/documentView/documentView.component';
import { ContactsListComponent } from './view/contactsView/contacts-list/contacts-list.component';
import { LocationListComponent } from './View/locationView/location-list/location-list.component';
import { AssetsListComponent } from './view/assetsView/assets-list/assets-list.component';
import { TicketListComponent } from './view/ticketView/ticket-list/ticket-list.component';
import { DocumentListComponent } from './view/documentView/document-list/document-list.component';
import { TicketCategoryComponent } from './masterPages/ticketCategory/ticketCategory.component';
import { TicketSubCategoryComponent } from './masterPages/ticketSubCategory/ticketSubCategory.component';
const routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'location', component: LocationViewComponent },
    { path: 'contacts', component: ContactsViewComponent },
    { path: 'assets', component: AssetsViewComponent },
    { path: 'ticket', component: TicketViewComponent },
    { path: 'document', component: DocumentViewComponent },
    { path: 'Department', component: DepartmentComponent },
    { path: 'designation', component: DesignationComponent },
    { path: 'Team', component: TeamComponent },
    { path: 'Role', component: RoleComponent },
    { path: 'AssetCategory', component: AssetCategoryComponent },
    { path: 'AssetSubCategory', component: AssetSubCategoryComponent },
    { path: 'Product', component: ProductComponent },
    { path: 'ProductType', component: ProductTypeComponent },
    { path: 'SoftwareType', component: SoftwareTypeComponent },
    { path: 'SoftwareCategory', component: SoftwareCategoryComponent },
    { path: 'Timezone', component: TimezoneComponent },
    { path: 'TicketCategory', component: TicketCategoryComponent },
    { path: 'TicketSubCategory', component: TicketSubCategoryComponent },
    { path: 'contactsList', component: ContactsListComponent },
    { path: 'locationList', component: LocationListComponent },
    { path: 'assetsList', component: AssetsListComponent },
    { path: 'ticketList', component: TicketListComponent },
    { path: 'documentList', component: DocumentListComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map