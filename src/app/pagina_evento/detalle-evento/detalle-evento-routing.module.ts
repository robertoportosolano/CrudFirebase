import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleEventoPage } from './detalle-evento.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleEventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleEventoPageRoutingModule {}
