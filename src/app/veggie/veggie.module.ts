import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeggiePageRoutingModule } from './veggie-routing.module';

import { VeggiePage } from './veggie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeggiePageRoutingModule
  ],
  declarations: [VeggiePage]
})
export class VeggiePageModule {}
