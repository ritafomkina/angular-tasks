import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import EmptyPageComponent from './core/components/empty-page/empty-page.component';
import ErrorPageComponent from './core/components/error-page/error-page.component';
import DetailedInfoComponent from './YouTube/components/detailed-info/detailed-info.component';
import SearchResultsBlockComponent from './YouTube/components/search-results-block/search-results-block.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: EmptyPageComponent },
  { path: 'main', loadChildren: () => import('./YouTube/YouTube.module').then((m) => m.default) },
  // {component: SearchResultsBlockComponent },
  { path: 'video/:id', component: DetailedInfoComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule { }
