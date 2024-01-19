import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PnutPageRoutingModule } from './pnut-routing.module';

import { PnutPage } from './pnut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PnutPageRoutingModule
  ],
  declarations: [PnutPage]
})
export class PnutPageModule {}
