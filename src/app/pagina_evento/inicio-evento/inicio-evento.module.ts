import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioEventoPageRoutingModule } from './inicio-evento-routing.module';

import { InicioEventoPage } from './inicio-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioEventoPageRoutingModule
  ],
  declarations: [InicioEventoPage]
})
export class InicioEventoPageModule {}
