import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppUserRoutingModule { }
