import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import EmptyPageComponent from './core/components/empty-page/empty-page.component';
import ErrorPageComponent from './core/components/error-page/error-page.component';
import { AuthGuardService } from './core/guards/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: EmptyPageComponent },
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
