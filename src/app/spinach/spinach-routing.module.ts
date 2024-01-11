import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpinachPage } from './spinach.page';

const routes: Routes = [
  {
    path: '',
    component: SpinachPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpinachPageRoutingModule {}
