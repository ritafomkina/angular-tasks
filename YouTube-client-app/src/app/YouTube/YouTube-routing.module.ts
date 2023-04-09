import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import MainPageComponent from './components/main-page/main-page.component';

import ContainerComponent from './components/detailed-info/container/container.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'video/:id', component: ContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class YouTubeRoutingModule { }
