import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SausagerollPageRoutingModule } from './sausageroll-routing.module';

import { SausagerollPage } from './sausageroll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SausagerollPageRoutingModule
  ],
  declarations: [SausagerollPage]
})
export class SausagerollPageModule {}
