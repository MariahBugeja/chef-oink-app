import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HisotyPage } from './hisoty.page';

const routes: Routes = [
  {
    path: '',
    component: HisotyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HisotyPageRoutingModule {}
