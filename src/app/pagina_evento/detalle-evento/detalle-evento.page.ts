import { Component, OnInit } from '@angular/core';
import { EventoService } from "src/app/servicios/eventos/evento.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.page.html',
  styleUrls: ['./detalle-evento.page.scss'],
})
export class DetalleEventoPage implements OnInit {
  
  public eventoActual:any={};
  public idEvento:string;

  constructor(public es:EventoService, public Ar:ActivatedRoute) { }

  ngOnInit() {
   this.idEvento= this.Ar.snapshot.paramMap.get('id');
   this.eventoActual= this.es.obtener_detalleEvento(this.idEvento).valueChanges();
 
  }



}
