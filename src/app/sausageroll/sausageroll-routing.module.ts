import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SausagerollPage } from './sausageroll.page';

const routes: Routes = [
  {
    path: '',
    component: SausagerollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SausagerollPageRoutingModule {}
