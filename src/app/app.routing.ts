import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      // {
      //   path: 'IsonAccountLocation',
      //   loadChildren: './views/IsonAccountLocation/IsonAccountLocation.module#IsonAccountLocationModule'
      // },
      {
        path: 'ContactUser',
        loadChildren: './views/ContactUser/ContactUser.module#ContactUserModule'
      },
      {
        path: 'Location',
        loadChildren: './views/Location/Location.module#LocationModule'
      },
      {
        path: 'Ticket',
        loadChildren: './views/Ticket/Ticket.module#TicketModule'
      },
      {
        path: 'Asset',
        loadChildren: './views/Asset/Asset.module#AssetModule'
      },
      {
        path: 'UpTime',
        loadChildren: './views/UpTime/UpTime.module#UpTimeModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'Department',
        loadChildren: './masterPages/Department/Department.module#DepartmentModule'
      },
      {
        path: 'Designation',
        loadChildren: './masterPages/Designation/Designation.module#DesignationModule'
      },
      {
        path: 'Role',
        loadChildren: './masterPages/Role/Role.module#RoleModule'
      },
      {
        path: 'Country',
        loadChildren: './masterPages/Country/Country.module#CountryModule'
      },
      {
        path: 'Team',
        loadChildren: './masterPages/Team/Team.module#TeamModule'
      },
      {
        path: 'AssetCategory',
        loadChildren: './masterPages/AssetCategory/AssetCategory.module#AssetCategoryModule'
      },
      {
        path: 'AssetSubCategory',
        loadChildren: './masterPages/AssetSubCategory/AssetSubCategory.module#AssetSubCategoryModule'
      },
      {
        path: 'Product',
        loadChildren: './masterPages/Product/Product.module#ProductModule'
      },
      {
        path: 'ProductType',
        loadChildren: './masterPages/ProductType/ProductType.module#ProductTypeModule'
      },
      {
        path: 'SoftwareType',
        loadChildren: './masterPages/SoftwareType/SoftwareType.module#SoftwareTypeModule'
      },
      {
        path: 'SoftwareCategory',
        loadChildren: './masterPages/SoftwareCategory/SoftwareCategory.module#SoftwareCategoryModule'
      },
      {
        path: 'TicketType',
        loadChildren: './masterPages/TicketType/TicketType.module#TicketTypeModule'
      },
      {
        path: 'TicketCategory',
        loadChildren: './masterPages/TicketCategory/TicketCategory.module#TicketCategoryModule'
      },
      {
        path: 'ServiceType',
        loadChildren: './masterPages/ServiceType/ServiceType.module#ServiceTypeModule'
      },
      {
        path: 'TimeZone',
        loadChildren: './masterPages/TimeZone/TimeZone.module#TimeZoneModule'
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
