import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavouryPageRoutingModule } from './savoury-routing.module';

import { SavouryPage } from './savoury.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavouryPageRoutingModule
  ],
  declarations: [SavouryPage]
})
export class SavouryPageModule {}
