import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppUserRoutingModule } from './app-user-routing.module';
import { AuthServerAdminComponent } from './auth-server-admin/auth-server-admin.component';
import { ResourceServerAdminComponent } from './resource-server-admin/resource-server-admin.component';
import { AuthServerUserComponent } from './auth-server-user/auth-server-user.component';
import { ResourceServerUserComponent } from './resource-server-user/resource-server-user.component';

@NgModule({
  declarations: [ AuthServerAdminComponent, ResourceServerAdminComponent, AuthServerUserComponent, ResourceServerUserComponent],
  imports: [
    CommonModule,
    AppUserRoutingModule
  ]
})
export class AppUserModule { }
