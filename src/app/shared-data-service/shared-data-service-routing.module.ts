import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedDataServicePage } from './shared-data-service.page';

const routes: Routes = [
  {
    path: '',
    component: SharedDataServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedDataServicePageRoutingModule {}
