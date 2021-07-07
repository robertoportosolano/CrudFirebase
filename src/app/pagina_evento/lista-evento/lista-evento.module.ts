import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaEventoPageRoutingModule } from './lista-evento-routing.module';

import { ListaEventoPage } from './lista-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    ListaEventoPageRoutingModule
  ],
  declarations: [ListaEventoPage]
})
export class ListaEventoPageModule {}
