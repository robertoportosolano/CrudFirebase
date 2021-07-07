import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioEventoPage } from './inicio-evento.page';

const routes: Routes = [
  {
    path: '',
    component: InicioEventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioEventoPageRoutingModule {}
