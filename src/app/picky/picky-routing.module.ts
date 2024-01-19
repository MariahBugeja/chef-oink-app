import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickyPage } from './picky.page';

const routes: Routes = [
  {
    path: '',
    component: PickyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickyPageRoutingModule {}
