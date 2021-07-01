import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CrearPageRoutingModule } from './crear-routing.module';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { CrearPage } from './crear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    CrearPageRoutingModule
  ],
  declarations: [CrearPage]
})
export class CrearPageModule {}
