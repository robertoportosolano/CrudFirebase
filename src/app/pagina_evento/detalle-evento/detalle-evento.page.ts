import { Component, OnInit } from '@angular/core';
import { EventoService } from "src/app/servicios/eventos/evento.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.page.html',
  styleUrls: ['./detalle-evento.page.scss'],
})
export class DetalleEventoPage implements OnInit {
  
  public eventoActual:any=[];
  public nombreInvitado="";

  constructor(public es:EventoService, public Ar:ActivatedRoute) { }

  ngOnInit() {
   const idEvento: string= this.Ar.snapshot.paramMap.get('id');
   this.es.obtener_detalleEvento(idEvento).then(eventoSnapshot=>{
     this.eventoActual= eventoSnapshot.data();
     this.eventoActual.id= eventoSnapshot.id;
   });
   }

   agregarInvitado(nombreInvitado: string): void{
     this.es.agregarInvitados(nombreInvitado, this.eventoActual.id,this.eventoActual.precio).then(() => this.nombreInvitado = '');

   }  



}
