import { Injectable } from '@angular/core';
import { AuthService } from "src/app/servicios/auth.service";
import firebase  from "firebase/app";
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument, DocumentReference} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(public listaRefEvento: AngularFirestore,public AS:AuthService) { }

  async creacionEvento(nombreEvento:string,fechaEvento:string,precioEvento:number,costoEvento:number):Promise<DocumentReference>{
     const usuario: firebase.User= await this.AS.obtenerUsuario();
     return  this.listaRefEvento.collection(`perfilUsuario/${usuario.uid}/listaEvento`).add({
        nombre: nombreEvento,
        fecha: fechaEvento,
        precio: precioEvento*1,
        costo:costoEvento*1,
        ingreso: costoEvento* -1,
     });
  }



  obtener_listaEventos(){
    const usuario: firebase.User= this.AS.obtenerUsuario();
    const referencia= this.listaRefEvento.collection(`perfilUsuario/${usuario.uid}/listaEvento`);
    return referencia.valueChanges({idCampo: 'id'}); 
  }

  obtener_detalleEvento(idEvento:string):AngularFirestoreDocument{
    const usuario: firebase.User= this.AS.obtenerUsuario(); 
    return this.listaRefEvento.collection(`perfilUsuario/${usuario.uid}/listaEvento`).doc(idEvento);

  }



}
