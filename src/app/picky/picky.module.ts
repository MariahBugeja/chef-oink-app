import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickyPageRoutingModule } from './picky-routing.module';

import { PickyPage } from './picky.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickyPageRoutingModule
  ],
  declarations: [PickyPage]
})
export class PickyPageModule {}
