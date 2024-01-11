import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetmealPageRoutingModule } from './setmeal-routing.module';

import { SetmealPage } from './setmeal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetmealPageRoutingModule
  ],
  declarations: [SetmealPage]
})
export class SetmealPageModule {}
