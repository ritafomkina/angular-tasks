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
    path: 'admin',
    loadChildren: () => import('./admin-page/admin-page.module').then((m) => m.default),
  },
  {
    path: 'main',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.default),
    canActivate: [AuthGuardService],
  },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule { }
