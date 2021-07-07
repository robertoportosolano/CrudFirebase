import { Component, OnInit } from '@angular/core';
import { EventoService } from "src/app/servicios/eventos/evento.service";

@Component({
  selector: 'app-lista-evento',
  templateUrl: './lista-evento.page.html',
  styleUrls: ['./lista-evento.page.scss'],
})
export class ListaEventoPage implements OnInit {
  listaEventos:any=[];
  constructor(public es:EventoService) { }

  ngOnInit() {
  console.log(typeof(this.listaEventos));
  this.listaEventos= this.es.obtener_listaEventos();

  }



}
