import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChocPageRoutingModule } from './choc-routing.module';

import { ChocPage } from './choc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChocPageRoutingModule
  ],
  declarations: [ChocPage]
})
export class ChocPageModule {}
