import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChocPage } from './choc.page';

const routes: Routes = [
  {
    path: '',
    component: ChocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChocPageRoutingModule {}
