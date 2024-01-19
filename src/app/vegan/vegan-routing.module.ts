import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeganPage } from './vegan.page';

const routes: Routes = [
  {
    path: '',
    component: VeganPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeganPageRoutingModule {}
