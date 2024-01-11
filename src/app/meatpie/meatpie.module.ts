import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeatpiePageRoutingModule } from './meatpie-routing.module';

import { MeatpiePage } from './meatpie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeatpiePageRoutingModule
  ],
  declarations: [MeatpiePage]
})
export class MeatpiePageModule {}
