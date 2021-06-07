import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthServerAdminComponent } from './auth-server-admin/auth-server-admin.component';
import { ResourceServerAdminComponent } from './resource-server-admin/resource-server-admin.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: UserDashboardComponent
  },
  {
    path: 'home',
    component: UserHomeComponent
  },
  {
    path: 'admin',
    component: AuthServerAdminComponent
  },
  {
    path: 'resource-admin',
    component: ResourceServerAdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppUserRoutingModule { }
