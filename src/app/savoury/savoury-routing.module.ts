import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavouryPage } from './savoury.page';

const routes: Routes = [
  {
    path: '',
    component: SavouryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavouryPageRoutingModule {}
