import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import ErrorPageComponent from './core/components/error-page/error-page.component';
import AuthGuardService from './core/guards/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.default),
  },
  {
    path: 'main',
    loadChildren: () => import('./YouTube/YouTube.module').then((m) => m.default),
    canActivate: [AuthGuardService],
  },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule { }
