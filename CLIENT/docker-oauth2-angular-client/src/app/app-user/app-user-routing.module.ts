import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthServerAdminComponent } from './auth-server-admin/auth-server-admin.component';
import { AuthServerUserComponent } from './auth-server-user/auth-server-user.component';
import { ResourceServerAdminComponent } from './resource-server-admin/resource-server-admin.component';
import { ResourceServerUserComponent } from './resource-server-user/resource-server-user.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'auth-user',
    component: AuthServerUserComponent
  },
  {
    path: 'resource-user',
    component: ResourceServerUserComponent
  },
  {
    path: 'auth-admin',
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
