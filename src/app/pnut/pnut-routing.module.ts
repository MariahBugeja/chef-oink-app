import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PnutPage } from './pnut.page';

const routes: Routes = [
  {
    path: '',
    component: PnutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PnutPageRoutingModule {}
