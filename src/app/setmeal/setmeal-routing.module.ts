import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetmealPage } from './setmeal.page';

const routes: Routes = [
  {
    path: '',
    component: SetmealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetmealPageRoutingModule {}
