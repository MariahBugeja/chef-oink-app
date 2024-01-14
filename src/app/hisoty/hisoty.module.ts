import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HisotyPageRoutingModule } from './hisoty-routing.module';

import { HisotyPage } from './hisoty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HisotyPageRoutingModule
  ],
  declarations: [HisotyPage]
})
export class HisotyPageModule {}
