// userservices.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserservicesPageRoutingModule } from './userservices-routing.module';
import { UserService } from './userservices.page'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserservicesPageRoutingModule
  ],
  providers: [UserService],  
})
export class UserservicesPageModule {}
