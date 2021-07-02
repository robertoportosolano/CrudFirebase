import { Component } from '@angular/core';
import { FirestoreService } from "src/app/servicios/datos/firestore.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ListaCancion:any=[];
  constructor(public fs: FirestoreService, public router:Router) {}


ngOnInit(){
  this.ListaCancion=this.fs.obtenerListaCancion().valueChanges();
}


}


