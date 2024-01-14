import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentsuccesfulPage } from './paymentsuccesful.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentsuccesfulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsuccesfulPageRoutingModule {}
