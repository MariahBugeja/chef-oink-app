import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedDataServicePageRoutingModule } from './shared-data-service-routing.module';

import { SharedDataServicePage } from './shared-data-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedDataServicePageRoutingModule
  ],
  declarations: [SharedDataServicePage]
})
export class SharedDataServicePageModule {}
