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
  this.es.obtener_listaEventos().then(listaEventoSnapShot=>{
   this.listaEventos=[];
   listaEventoSnapShot.forEach(snap=>{this.listaEventos.push({id: snap.id,
    nombre: snap.data().nombre,
    precio: snap.data().precio,
    fecha: snap.data().fecha });
    return false;
    });
 });



  }



}
