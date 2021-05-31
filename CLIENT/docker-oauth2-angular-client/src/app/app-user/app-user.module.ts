import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppUserRoutingModule } from './app-user-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [UserHomeComponent, UserDashboardComponent],
  imports: [
    CommonModule,
    AppUserRoutingModule
  ]
})
export class AppUserModule { }
