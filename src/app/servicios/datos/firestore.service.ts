import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from "@angular/fire/firestore";
import { Cancion } from "src/app/cancion";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore:AngularFirestore) { }

  crearCancion(nombreAlbum:string,nombreArtista:string, descripCancion:string,nombreCancion:string):Promise<void> {
   const id= this.firestore.createId();
   return this.firestore.doc(`listaCancion/${id}`).set({id,nombreAlbum,nombreArtista,descripCancion,nombreCancion});
  }
 
  obtenerListaCancion():AngularFirestoreCollection<Cancion>{
  return this.firestore.collection('listaCancion'); 
  }

  detalleCancion(idCancion: string):AngularFirestoreDocument<Cancion>{
   return this.firestore.collection(`listaCancion`).doc(idCancion);
  }

  eliminarCancion(idCancion: string):Promise<void>{
   return this.firestore.doc(`listaCancion/${idCancion}`).delete();
  }



}
