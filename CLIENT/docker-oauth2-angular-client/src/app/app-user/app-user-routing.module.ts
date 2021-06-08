import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { AuthServerAdminComponent } from './auth-server-admin/auth-server-admin.component';
import { AuthServerUserComponent } from './auth-server-user/auth-server-user.component';
import { ResourceServerAdminComponent } from './resource-server-admin/resource-server-admin.component';
import { ResourceServerUserComponent } from './resource-server-user/resource-server-user.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: UserDashboardComponent
  },
  {
    path: 'auth-user',
    canActivate: [AuthGuard],
    component: AuthServerUserComponent
  },
  {
    path: 'resource-user',
    canActivate: [AuthGuard],
    component: ResourceServerUserComponent
  },
  {
    path: 'auth-admin',
    canActivate: [AuthGuard],
    component: AuthServerAdminComponent
  },
  {
    path: 'resource-admin',
    canActivate: [AuthGuard],
    component: ResourceServerAdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppUserRoutingModule { }
