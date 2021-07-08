import { Injectable } from '@angular/core';
import { AuthService } from "src/app/servicios/auth.service";
import firebase  from "firebase/app";
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument, DocumentReference} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  

   public listaRefEvento: firebase.firestore.CollectionReference;
  constructor(public AS:AuthService) { }

  async creacionEvento(nombreEvento:string,fechaEvento:string,precioEvento:number,costoEvento:number):Promise<DocumentReference>{
     const usuario: firebase.User= await this.AS.obtenerUsuario();
     this.listaRefEvento= firebase.firestore().collection(`perfilUsuario/${usuario.uid}/listaEvento`);
     
     return  this.listaRefEvento.add({
        nombre: nombreEvento,
        fecha: fechaEvento,
        precio: precioEvento*1,
        costo:costoEvento*1,
        ingreso: costoEvento* -1,
     });
  }



  obtener_listaEventos():Promise<firebase.firestore.QuerySnapshot>{
    const usuario: firebase.User= this.AS.obtenerUsuario();
    this.listaRefEvento = firebase.firestore().collection(`perfilUsuario/${usuario.uid}/listaEvento`);
        return this.listaRefEvento.get(); 
  }

  obtener_detalleEvento(idEvento:string):Promise<firebase.firestore.QueryDocumentSnapshot>{
    const usuario: firebase.User= this.AS.obtenerUsuario(); 
    this.listaRefEvento=firebase.firestore().collection(`perfilUsuario/${usuario.uid}/listaEvento`);
    return this.listaRefEvento.doc(idEvento).get();

  }

  async agregarInvitados(nombreInvitado: string, idEvento: string, precioEvento: number):Promise<void>{

   return this.listaRefEvento.doc(idEvento)
   .collection('listaInvitado')
   .add({nombreInvitado})
   .then((nuevoInvitado)=>{
      return firebase.firestore().runTransaction(transaction=> {
        return transaction.get(this.listaRefEvento.doc(idEvento)).then(eventoDoc=>{
          const nuevoIngreso = eventoDoc.data().ingreso + precioEvento;
          transaction.update(this.listaRefEvento.doc(idEvento), {ingreso: nuevoIngreso}
          );
        });
      });
   });
  }



}
