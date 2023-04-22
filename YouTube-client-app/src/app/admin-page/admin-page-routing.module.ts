import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import CreateNewCardComponent from './components/create-new-card/create-new-card.component';

const routes: Routes = [
  { path: '', component: CreateNewCardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class AdminPageRoutingModule { }
