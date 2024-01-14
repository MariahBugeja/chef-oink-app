import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentsuccesfulPageRoutingModule } from './paymentsuccesful-routing.module';

import { PaymentsuccesfulPage } from './paymentsuccesful.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentsuccesfulPageRoutingModule
  ],
  declarations: [PaymentsuccesfulPage]
})
export class PaymentsuccesfulPageModule {}
