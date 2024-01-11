import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpinachPageRoutingModule } from './spinach-routing.module';

import { SpinachPage } from './spinach.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpinachPageRoutingModule
  ],
  declarations: [SpinachPage]
})
export class SpinachPageModule {}
