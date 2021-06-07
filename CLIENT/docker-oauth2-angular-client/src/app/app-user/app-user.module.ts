import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppUserRoutingModule } from './app-user-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AuthServerAdminComponent } from './auth-server-admin/auth-server-admin.component';
import { ResourceServerAdminComponent } from './resource-server-admin/resource-server-admin.component';

@NgModule({
  declarations: [UserHomeComponent, UserDashboardComponent, AuthServerAdminComponent, ResourceServerAdminComponent],
  imports: [
    CommonModule,
    AppUserRoutingModule
  ]
})
export class AppUserModule { }
