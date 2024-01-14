import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserService } from 'src/app/userservices/userservices.page'; 

const routes: Routes = [
  {
    path: '',
    component: UserService
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserservicesPageRoutingModule {}
