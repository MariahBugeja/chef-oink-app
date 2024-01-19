import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuffinbPage } from './muffinb.page';

const routes: Routes = [
  {
    path: '',
    component: MuffinbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuffinbPageRoutingModule {}
