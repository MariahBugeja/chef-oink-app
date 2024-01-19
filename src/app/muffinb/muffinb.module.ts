import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuffinbPageRoutingModule } from './muffinb-routing.module';

import { MuffinbPage } from './muffinb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuffinbPageRoutingModule
  ],
  declarations: [MuffinbPage]
})
export class MuffinbPageModule {}
