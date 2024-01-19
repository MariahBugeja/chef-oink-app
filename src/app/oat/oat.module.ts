import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OatPageRoutingModule } from './oat-routing.module';

import { OatPage } from './oat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OatPageRoutingModule
  ],
  declarations: [OatPage]
})
export class OatPageModule {}
