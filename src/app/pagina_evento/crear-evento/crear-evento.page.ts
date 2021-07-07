import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { EventoService } from "src/app/servicios/eventos/evento.service";
@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.page.html',
  styleUrls: ['./crear-evento.page.scss'],
})
export class CrearEventoPage implements OnInit {
 
  nombreEvento:string;
  fechaEvento:string;
  precioEvento:number;
  costoEvento:number;

  constructor(public router:Router, public es:EventoService) { }

  ngOnInit() {
  }

  crearEvento(nombreEvento:string,fechaEvento:string,precioEvento:number,costoEvento:number):void{
   if (nombreEvento==undefined || fechaEvento==undefined ||precioEvento==undefined ||costoEvento==undefined) {
      return;
   } 
   this.es.creacionEvento(nombreEvento,fechaEvento,precioEvento,costoEvento).then(()=>{
   this.router.navigateByUrl('/inicio-evento');
  });
  }

}
