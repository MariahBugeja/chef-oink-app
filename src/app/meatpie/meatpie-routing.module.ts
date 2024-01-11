import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeatpiePage } from './meatpie.page';

const routes: Routes = [
  {
    path: '',
    component: MeatpiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeatpiePageRoutingModule {}
