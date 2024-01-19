import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeetPageRoutingModule } from './beet-routing.module';

import { BeetPage } from './beet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeetPageRoutingModule
  ],
  declarations: [BeetPage]
})
export class BeetPageModule {}
