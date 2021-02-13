import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  { 
    path: 'dashboard',canLoad:[AuthGuard] , loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) 
  },
  { 
    path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) 
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
